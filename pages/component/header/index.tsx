import React, { useState } from 'react';
import style from './index.module.scss';
import avatar from './../../../public/avatar.jpg';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.nav}>
        <div className={style.left}>
          <Image src={avatar} alt='avatar' width={128} height={128} />
        </div>
      </div>
    </div>
  );
}
