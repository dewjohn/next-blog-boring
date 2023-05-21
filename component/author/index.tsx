import React, { useState } from 'react';
import style from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { config } from '@/config';
import { IconType } from 'react-icons';

const ContactComponent = ({ url, icon }: { url: string; icon: IconType }) => (
  <Link href={url} key={url}>
    {React.createElement(icon)}
  </Link>
);

export default function Author() {
  return (
    <div className={style.author}>
      <div className={style.author__avatar}>
        <Image
          src={config.avatar}
          alt="avatar"
          width={128}
          height={128}
          priority
        />
      </div>
      <div className={style.author__contact}>
        {config.contact &&
          config.contact.map((item, index) => (
            <ContactComponent
              key={item.url + index}
              url={item.url}
              icon={item.icon}
            />
          ))}
      </div>
    </div>
  );
}
