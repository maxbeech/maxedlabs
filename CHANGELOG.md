# Changelog

## 2026-09-30

- Moved hosting from Vercel to Helm7. Removed `vercel.json` (its `builds` entry and preview-build ignore command only applied to Vercel).
- `www.maxedlabs.com` now redirects to `maxedlabs.com` from `next.config.js`, as it did on Vercel.
- Added `npm test` (a check that keeps Vercel-only configuration out, and the www redirect rule) and `npm run typecheck`.
- README hosting section rewritten.
