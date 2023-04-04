import React from 'react';
import style from './index.module.scss';

export default function Text({ text }: any) {
  if (!text) {
    return null;
  }
  return text.map((value: any) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={text.content}
        className={[
          bold ? style.bold : '',
          code ? style.code : '',
          italic ? style.italic : '',
          strikethrough ? style.strikethrough : '',
          underline ? style.underline : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
}
