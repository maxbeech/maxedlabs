// Keeps Vercel-only behaviour out of the repository. The site is served by
// Helm7; a vercel.json, a @vercel/* package or a VERCEL_* read would silently
// do nothing there (or, for `builds`, be misleading), so fail the build early.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { createRequire } from 'node:module'

const root = new URL('..', import.meta.url).pathname
const require = createRequire(import.meta.url)

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (['node_modules', '.next', '.git', 'public'].includes(name)) continue
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path, out)
    else out.push(path)
  }
  return out
}

test('no vercel.json', () => {
  assert.equal(existsSync(join(root, 'vercel.json')), false)
})

test('no Vercel references in source, config or dependencies', () => {
  const files = walk(root).filter((f) => {
    const rel = relative(root, f)
    // The lockfile is generated; .gitignore and this test name the word on purpose.
    return !['package-lock.json', '.gitignore', 'CHANGELOG.md', 'test/no-vercel.test.mjs'].includes(rel)
      && !/\.(png|jpe?g|webp|gif|ico|mp4|webm|svg|tsbuildinfo)$/i.test(rel)
  })
  const offenders = files.filter((f) => /vercel/i.test(readFileSync(f, 'utf8'))).map((f) => relative(root, f))
  assert.deepEqual(offenders, [])
})

test('www redirects to the bare domain, other hosts do not', async () => {
  const config = require(join(root, 'next.config.js'))
  const rules = await config.redirects()
  assert.equal(rules.length, 1)
  const [rule] = rules
  assert.equal(rule.permanent, true)
  assert.deepEqual(rule.has, [{ type: 'host', value: 'www.maxedlabs.com' }])
  assert.equal(rule.destination, 'https://maxedlabs.com/:path*')
})
