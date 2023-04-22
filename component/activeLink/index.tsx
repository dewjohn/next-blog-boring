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
    fontWeight: router.asPath === href ? '600' : '400',
    borderBottom: router.asPath === href ? 'solid 2px #2563eb' : 'unset'
  };
  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
}
