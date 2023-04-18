import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import avatar from '@/public/avatar.jpg';
import Image from 'next/image';
import style from './index.module.scss';
import { useScroll } from 'ahooks';
import NavItems from '../navItems';

const Mode = dynamic(() => import('./component/mode'), {
  ssr: false
});

export default function Navbar() {
  const scroll = useScroll();
  const isAvatar = scroll && scroll?.top > 176;
  return (
    <div className={style.navbar}>
      <nav className={style.navbar__nav}>
        <div className={style.navbar__name}>
          <Link href="/">
            <h1 style={{ opacity: isAvatar ? 0 : 1 }}>John</h1>
            <Image
              className={style.navbar__mini}
              style={{ opacity: isAvatar ? 1 : 0 }}
              src={avatar}
              alt="avatar"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>
        <div className={style.navbar__center}>
          <NavItems />
        </div>
        <div className={style.navbar__right}>
          <Mode />
        </div>
      </nav>
    </div>
  );
}
