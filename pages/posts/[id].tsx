import style from '@/styles/post.module.scss';
import { getDatabase, getPost, getPostContent } from '@/lib/notion';
import { NotionRenderer } from 'react-notion-x';
import React, { Fragment } from 'react';
import Tag from '@/component/tag';
import type { ExtendedRecordMap } from 'notion-types';
import dynamic from 'next/dynamic';
import useTheme from '@/hooks/useTheme';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);

const Posts = ({
  post,
  recordMap
}: {
  post: IPostDetail;
  recordMap: ExtendedRecordMap;
}) => {
  const theme = useTheme();
  console.log('theme', theme);
  return (
    <div className={style.post}>
      <div className={style.post__header}>
        <div className={style.post__title}>
          <h1>{post.name}</h1>
        </div>
      </div>
      <div className={style.post__content}>
        <NotionRenderer
          recordMap={recordMap}
          components={{ Code }}
          darkMode={theme === 'dark'}
        />
      </div>
      <div className={style.post__time} title="创建时间">
        Last edit:{' '}
        <span data-tip="修改时间" title="修改时间">
          {post.etime}
        </span>
      </div>
      <div className={style.post__tags}>
        {post.tags.map((item: { name: string }, index: number) => (
          <Fragment key={item.name + index}>
            <Tag name={item.name} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const database = await getDatabase();
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: false
  };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const recordMap: ExtendedRecordMap = await getPostContent(id);
  const post: IPostDetail = await getPost(id);
  return {
    props: {
      post,
      recordMap
    }
  };
};

export default Posts;
