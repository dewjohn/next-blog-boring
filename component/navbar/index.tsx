import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import avatar from '@/public/avatar.jpg';
import Image from 'next/image';
import style from './index.module.scss';
import { useScroll } from 'ahooks';
import NavItems from '../navItems';
import { config } from '@/config';
import { AiOutlineMenu } from 'react-icons/ai';

const Mode = dynamic(() => import('./component/mode'), {
  ssr: false
});

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  const scroll = useScroll();
  const isAvatar = useMemo(() => scroll && scroll?.top > 176, [scroll]);
  const showMenu = useMemo(() => config.navList.length > 3, []);

  const toggle = () => setMenu(!menu);

  return (
    <div className={style.navbar}>
      <nav className={style.navbar__nav}>
        <div className={style.navbar__name}>
          <Link href="/">
            <h1 style={{ opacity: isAvatar ? 0 : 1 }}>John</h1>
            <Image
              className={style.navbar__mini}
              style={{ opacity: isAvatar ? 1 : 0 }}
              src={avatar}
              alt="avatar"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>
        {!showMenu && (
          <div className={style.navbar__center}>
            <NavItems />
          </div>
        )}
        <div className={style.navbar__right}>
          {showMenu && (
            <span className={style.navbar__menu} onClick={toggle}>
              <AiOutlineMenu />
            </span>
          )}
          <span className={style.navbar__mode}>
            <Mode />
          </span>
        </div>
      </nav>
      {menu && (
        <div className={style.layer}>
          {config.navList.map((item, index) => (
            <Link
              className={style.layer__item}
              key={item.title + index}
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
