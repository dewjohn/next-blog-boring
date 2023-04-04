import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import avatar from './../../../public/avatar.jpg';
import Image from 'next/image';
import style from './index.module.scss';
import { useScroll } from 'ahooks';

const Mode = dynamic(() => import('./component/mode'), {
  ssr: false,
});

export default function Navbar() {
  const scroll = useScroll();
  return (
    <div className={style.navbar}>
      <nav className={style.nav}>
        {scroll && scroll?.top < 176 ? (
          <div className={style.nav__name}>
            <Link href='/'>
              <h1>John</h1>
            </Link>
          </div>
        ) : (
          <Image
            className={style.nav__mini}
            src={avatar}
            alt='avatar'
            width={32}
            height={32}
            priority
            style={{ borderRadius: '50%' }}
          />
        )}
        <div className={style.nav__center}>
          <ul>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/tags'>Tags</Link>
            </li>
            <li>
              <Link href='/archives'>Archives</Link>
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
