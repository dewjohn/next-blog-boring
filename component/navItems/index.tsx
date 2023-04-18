import { config } from '@/config';
import React from 'react';
import ActiveLink from '../activeLink';
import style from './index.module.scss';

function NavItems() {
  return (
    <div className={style.lists}>
      <ul>
        {config.navList!.map((item, index) => (
          <li key={item.title + index}>
            <ActiveLink href={item.url}>{item.title}</ActiveLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavItems;
