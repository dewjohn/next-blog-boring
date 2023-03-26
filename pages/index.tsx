import { getDatabase } from '@/lib/notion';
import style from '@/styles/main.module.scss';
import type { Ipost } from '@/types/post';
import Header from './component/header';
import { getDateString } from '@/utils/time';
import Link from 'next/link';

export default function Home({ posts }: Ipost) {
  return (
    <>
      <Header />
      <section className={style.main}>
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
          <a href=''>See all →</a>
        </div>
      </section>
    </>
  );
}
export const getStaticProps = async () => {
  const database = await getDatabase();
  return {
    props: {
      posts: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
