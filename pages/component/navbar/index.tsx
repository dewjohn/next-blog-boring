import dynamic from 'next/dynamic';
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
          <h1>John</h1>
        </div>
        <div className={style.center}>
          <ul className={style.nav_item}>
            <li>About</li>
            <li>Tags</li>
            <li>Archives</li>
            <li>Search</li>
          </ul>
        </div>
        <div className={style.right}>
          <Mode />
        </div>
      </nav>
    </div>
  );
}
