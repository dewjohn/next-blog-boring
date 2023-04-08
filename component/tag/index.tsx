import React from 'react';
import style from './index.module.scss';

export default function Tag({ color, name }: { color: string; name: string }) {
  return (
    <div className={style.tag} style={{ background: color }}>
      <div className={style.tag__name}>
        <div style={{ display: 'block' }}>{name}</div>
      </div>
    </div>
  );
}