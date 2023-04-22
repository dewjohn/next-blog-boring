import React from 'react';
import style from './index.module.scss';

export default function Tag({ name }: { name: string }) {
  return (
    <div className={style.tag}>
      <div className={style.tag__name}>
        <div style={{ display: 'block' }}>#{name}</div>
      </div>
    </div>
  );
}
