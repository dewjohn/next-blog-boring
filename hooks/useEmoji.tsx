import React, { useEffect } from 'react';
import { config } from '@/config';

const useEmoji = () => {
  const emojis = config.emoji;
  useEffect(() => {
    const clickEmoji = (e: MouseEvent) => {
      if (!emojis || emojis.length === 0) return;
      let root = document.querySelector('#root');
      let emoji = document.createElement('span');
      emoji.setAttribute('class', 'emoji');
      let x = e.offsetX;
      let y = e.offsetY;

      emoji.style.left = x + 'px';
      emoji.style.top = y + 'px';
      let icons = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.innerText = icons;

      let size = Math.random() * 50;
      emoji.style.fontSize = 5 + size + 'px';

      let max = 0;
      let min = 200;
      let randomValue = Math.floor(Math.random() * (max + 1 - min) + min);
      emoji.style.transform = 'translateX(' + randomValue + 'px)';

      root?.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, 1000);
    };
    document.addEventListener('click', clickEmoji);
    return () => document.removeEventListener('click', clickEmoji);
  }, []);
};

export default useEmoji;
