import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import style from './index.module.scss';

const Mode = dynamic(() => import('./component/mode'), {
  ssr: false,
});

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <nav className={style.navi}>
        <div className={style.left}>
          <Link href='/'>
            <h1>John</h1>
          </Link>
        </div>
        <div className={style.center}>
          <ul className={style.nav_item}>
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
        <div className={style.right}>
          <Mode />
        </div>
      </nav>
    </div>
  );
}
