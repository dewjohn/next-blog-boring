import style from './index.module.scss';

import React from 'react';

function Intro({ title }: { title: string }) {
  return (
    <div className={style.about}>
      <div className={style.about__header}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Intro;
