import React from 'react';
import Header from '../header';
import style from './index.module.scss';

export default function Main() {
  return (
    <>
      <Header />
      <section className={style.main}>
        <div className={style.posts}>
          <div className={style.post}>
            <div className={style.title}>
              <h3>Powered by Notion and Next.js</h3>
            </div>
            <div className={style.date}>
              <p>Feb 02, 2022</p>
            </div>
            <div className={style.read}>
              <a href=''>Read post →</a>
            </div>
          </div>

          <div className={style.post}>
            <div className={style.title}>
              <h3>Another blogpost</h3>
            </div>
            <div className={style.date}>
              <p>Feb 02, 2022</p>
            </div>
            <div className={style.read}>
              <a href=''>Read post →</a>
            </div>
          </div>

          <div className={style.post}>
            <div className={style.title}>
              <h3>Hello world!</h3>
            </div>
            <div className={style.date}>
              <p>Feb 02, 2022</p>
            </div>
            <div className={style.read}>
              <a href=''>Read post →</a>
            </div>
          </div>

          <div className={style.post}>
            <div className={style.title}>
              <h3>Styling Radix UI with CSS</h3>
            </div>
            <div className={style.date}>
              <p>Feb 02, 2022</p>
            </div>
            <div className={style.read}>
              <a href=''>Read post →</a>
            </div>
          </div>

          <div className={style.post}>
            <div className={style.title}>
              <h3>Using Vanilla Extract with next-themes</h3>
            </div>
            <div className={style.date}>
              <p>Feb 02, 2022</p>
            </div>
            <div className={style.read}>
              <a href=''>Read post →</a>
            </div>
          </div>

          <div className={style.post}>
            <div className={style.title}>
              <h3>Using the Strava API with Next.js</h3>
            </div>
            <div className={style.date}>
              <p>Feb 02, 2022</p>
            </div>
            <div className={style.read}>
              <a href=''>Read post →</a>
            </div>
          </div>
        </div>
        <div className={style.readMore}>
          <a href=''>See all →</a>
        </div>
      </section>
    </>
  );
}
