import React, { useEffect } from 'react';
import Footer from './../footer';
import Navbar from './../navbar';
import style from './index.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div id="root">
      <div className={style.App}>
        <Navbar />
        <main className={style.main}>
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
