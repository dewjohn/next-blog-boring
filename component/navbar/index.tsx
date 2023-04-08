import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import avatar from '@/public/avatar.jpg';
import Image from 'next/image';
import style from './index.module.scss';
import { useScroll } from 'ahooks';
import ActiveLink from '../activeLink';

const Mode = dynamic(() => import('./component/mode'), {
  ssr: false
});

export default function Navbar() {
  const scroll = useScroll();
  const showAvatar = scroll && scroll?.top > 176;
  return (
    <div className={style.navbar}>
      <nav className={style.nav}>
        <div className={style.nav__name}>
          <Link href="/">
            <h1 style={{ opacity: showAvatar ? 0 : 1 }}>John</h1>
            <Image
              className={style.nav__mini}
              style={{ opacity: showAvatar ? 1 : 0 }}
              src={avatar}
              alt="avatar"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>
        <div className={style.nav__center}>
          <ul>
            <li>
              <ActiveLink href="/about">About</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/tags">Tags</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/archives">Archives</ActiveLink>
            </li>
          </ul>
        </div>
        <div className={style.nav__right}>
          <Mode />
        </div>
      </nav>
    </div>
  );
}
