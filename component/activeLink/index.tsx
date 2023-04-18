import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

export default function ActiveLink({
  children,
  href
}: {
  children: ReactNode;
  href: string;
}) {
  const router = useRouter();
  const style = {
    background: router.asPath === href ? '#1c1c0213' : '#ffffff00',
    fontWeight: router.asPath === href ? '600' : '400',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    color: router.asPath === href ? '#233c72de' : '#1b1b18'
  };
  return (
    <Link href={href} style={style}>
      <span>{children}</span>
    </Link>
  );
}
