import React from 'react';
import fs from 'fs';
import path from 'path';
import style from '@/styles/about.module.scss';
import ReactMarkdown from 'react-markdown';

export default function About(props: any) {
  return (
    <div className={style.about}>
      <div className={style.about__header}>
        <h1>About</h1>
      </div>
      <div className={style.about__content}>
        <ReactMarkdown>{props.source}</ReactMarkdown>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'markdown', 'about.md');
  const source: any = await fs.readFileSync(filePath, 'utf8');
  return {
    props: {
      source
    }
  };
}
