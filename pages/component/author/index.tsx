import React, { useState } from 'react';
import style from './index.module.scss';
import avatar from './../../../public/avatar.jpg';
import Image from 'next/image';

export default function Author() {
  return (
    <div className={style.author}>
      <div className={style.author__avatar}>
        <Image src={avatar} alt='avatar' width={128} height={128} priority />
      </div>
    </div>
  );
}
