import { getDatabase } from '@/lib/notion';
import style from '@/styles/main.module.scss';
import Author from '@/component/author';
import { getDateString } from '@/utils/time';
import Link from 'next/link';
import Head from 'next/head';
import { config } from '@/config';

export default function Home({ posts }: Ipost) {
  return (
    <>
      <Head>
        <title>{config.name}</title>
      </Head>
      <Author />
      <section className={style.content}>
        <div className={style.posts}>
          {posts.map((post) => {
            return (
              <div
                className={style.post}
                key={post.title.title[0].text.content}
              >
                <div className={style.title}>
                  <h3>{post.title.title[0].text.content}</h3>
                </div>
                <div className={style.date}>
                  <p>{getDateString(post.created_time)}</p>
                </div>
                <div className={style.read}>
                  <Link href={`/posts/${post.id}`}>Read post →</Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className={style.readMore}>
          <Link href="/archives">See all →</Link>
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
