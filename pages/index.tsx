import Footer from './component/footer';
import Header from './component/header';
import Main from './component/main';
import style from './../styles/index.module.scss';
import Navbar from './component/navbar';
import { useEventListener } from 'ahooks';

export default function Home() {
  let emojis = ['😜', '🤤', '🤪', '😳', '😍', '❤️', '🤭'];
  useEventListener('mousemove', (e) => {
    let root = document.querySelector('#root');
    let emoji = document.createElement('span');
    emoji.setAttribute('class', 'emoji');
    let x = e.offsetX;
    let y = e.offsetY;

    emoji.style.left = `${x}px`;
    emoji.style.top = `${y}px`;

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
  });
  return (
    <div id='root'>
      <div className={style.App}>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
