import React, {useState} from 'react';
import style from './index.module.scss';
import avatar from '@/public/avatar.jpg';
import Image from 'next/image';
import {AiFillGithub, AiFillMail} from "react-icons/ai";
import Link from "next/link";
import * as https from "https";

export default function Author() {
  return (
    <div className={style.author}>
      <div className={style.author__avatar}>
        <Image src={avatar} alt='avatar' width={128} height={128} priority/>
      </div>
      <div className={style.author__contact}>
        <Link href='https://www.github.com/dewjohn'>
          <AiFillGithub/>
        </Link>
        <Link href='mailto:deweizhong@outlook.com'>
          <AiFillMail/>
        </Link>
      </div>
    </div>
  );
}
