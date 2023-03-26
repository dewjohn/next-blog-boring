import style from '@/styles/post.module.scss';
import { getBlocks, getDatabase, getPage } from '@/lib/notion';
import React, { Fragment } from 'react';
import type { IPage } from '@/types/post';
import Tag from '../component/tag';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';

const Posts = ({ page, block }: { page: IPage; block: any }) => {
  console.log(block);
  return (
    <div className={style.post}>
      <div className={style.post__header}>
        <div className={style.post__title}>
          <h1>{page.name}</h1>
        </div>
        <div className={style.post__time}>
          <span data-tip='创建时间'>
            <AiOutlineCalendar />
            {page.ctime}
          </span>
          <span data-tip='修改时间'>
            <AiOutlineClockCircle />
            {page.etime}
          </span>
        </div>
        <div className={style.post__tags}>
          {page.tags.map((item, index) => (
            <Fragment key={item.name + index}>
              <Tag name={item.name} color={item.color} />
            </Fragment>
          ))}
        </div>
      </div>
      <div className={style.post__content}></div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const database = await getDatabase();
  console.log('databased', database);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const page: IPage = await getPage(id);
  const block = await getBlocks(id);
  return {
    props: {
      page,
      block,
    },
  };
};

export default Posts;
