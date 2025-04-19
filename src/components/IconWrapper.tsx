'use client';

import { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}

// This is a client component wrapper for icons
export default function IconWrapper({ children, className = '' }: IconWrapperProps) {
  return <span className={className}>{children}</span>;
} 