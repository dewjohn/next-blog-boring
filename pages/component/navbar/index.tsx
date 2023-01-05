import React from 'react';
import style from './index.module.scss';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
interface Iprops {
  isDark: boolean;
  setIsDark: (prop: boolean) => void;
}

export default function Navbar(props: Iprops) {
  const toggle = () => {
    const state = props.isDark;
    props.setIsDark(!state);
    if (typeof window !== 'undefined' && !state) {
      localStorage.setItem('mode', 'dark');
    } else {
      localStorage.setItem('mode', 'light');
    }
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
          {props.isDark ? <BsFillMoonFill /> : <BsFillSunFill />}
        </div>
      </nav>
    </div>
  );
}
