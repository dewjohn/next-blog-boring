import React, { useState } from 'react';
import style from './index.module.scss';
import Image from 'next/image';
import moon from './../../../public/moon.svg';
import sun from './../../../public/sun.svg';

type mode = 'sun' | 'moon';

export default function Navbar() {
  const [mode, setMode] = useState<mode>('sun');
  const toggle = () => {
    if (mode === 'sun') setMode('moon');
    if (mode === 'moon') setMode('sun');
  };
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
        <div className={style.right} onClick={toggle}>
          <Image
            src={mode === 'sun' ? sun : moon}
            alt='mode'
            width={20}
            height={20}
          ></Image>
        </div>
      </nav>
    </div>
  );
}
