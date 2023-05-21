import { getDatabase } from '@/lib/notion';
import style from '@/styles/main.module.scss';
import Author from '@/component/author';
import { getDateString } from '@/utils/time';
import Link from 'next/link';
import Head from 'next/head';
import { config } from '@/config';
import useEmoji from '@/hooks/useEmoji';

export default function Home({ posts }: Ipost) {
  useEmoji();
  return (
    <>
      <Head>
        <title>{config.name}</title>
      </Head>
      <Author />
      <section className={style.content}>
        <div className={style.content__posts}>
          {posts.map((post) => {
            return (
              <div
                className={style.content__post}
                key={post.title.title[0].text.content}
              >
                <div className={style.content__title}>
                  <h3>{post.title.title[0].text.content}</h3>
                </div>
                <div className={style.content__date}>
                  <p>{getDateString(post.created_time)}</p>
                </div>
                <div className={style.content__read}>
                  <Link href={`/posts/${post.id}`}>
                    Read post <span className={style.content__arrow}>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className={style.content__readMore}>
          <Link href="/archives">See all</Link>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(6);
  return {
    props: {
      posts: database
    },
    revalidate: 1
  };
};
