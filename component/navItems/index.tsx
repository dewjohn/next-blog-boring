import { config } from '@/config';
import React from 'react';
import ActiveLink from '../activeLink';
import style from './index.module.scss';

function NavItems() {
  return (
    <div className={style.link}>
      <ul>
        {config.navList!.map((item, index) => (
          <li key={item.title + index} className={style.link__item}>
            <ActiveLink href={item.url}>{item.title}</ActiveLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavItems;
