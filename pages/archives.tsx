import React from 'react';
import style from '@/styles/archive.module.scss';
import Image from 'next/image';
import { getDatabase } from '@/lib/notion';
import { formateArchives } from '@/utils/archives';
import { translateYear } from '@/utils/year';
import Link from 'next/link';

export default function Archives({ posts }: { posts: formatePost }) {
  return (
    <div className={style.archive}>
      <div className={style.archive__header}>
        <h1>Archives</h1>
      </div>
      {Object.keys(posts)
        .reverse()
        .map((item) => (
          <div className={style.archive__item} key={item}>
            <div className={style.archive__year}>
              <h2>{item.slice(0, 4)}</h2>
              <Image src={translateYear(item.slice(0, 4))} alt="test" />
            </div>
            {posts[item].map((post) => (
              <div className={style.archive__post} key={post.id}>
                <div className={style.archive__title}>
                  <Link href={`posts/${post.id}`}>{post.title}</Link>
                </div>
                <div className={style.archive__time}>
                  <span>{post.created_time}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase();
  return {
    props: {
      posts: formateArchives(database)
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1 // In seconds
  };
};
