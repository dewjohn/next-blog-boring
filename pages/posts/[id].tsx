import style from '@/styles/post.module.scss';
import {getDatabase, getPost, getPostContent} from '@/lib/notion';
import {NotionRenderer} from 'react-notion-x'
import React, {Fragment} from 'react';
import Tag from '@/component/tag';
import {AiOutlineCalendar, AiOutlineClockCircle} from 'react-icons/ai';
import type {ExtendedRecordMap} from "notion-types";
import {IPostDetail} from "@/types/post";
import dynamic from 'next/dynamic'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)

const Posts = ({post, recordMap}: { post: IPostDetail, recordMap: ExtendedRecordMap }) => {
  return (
    <div className={style.post}>
      <div className={style.post__header}>
        <div className={style.post__title}>
          <h1>{post.name}</h1>
        </div>
        <div className={style.post__time}>
          <span data-tip='创建时间'>
            <AiOutlineCalendar/> {post.ctime}
          </span>
          <span data-tip='修改时间'>
            <AiOutlineClockCircle/> {post.etime}
          </span>
        </div>
        <div className={style.post__tags}>
          {post.tags.map((item: { name: string; color: string; }, index: number) => (
            <Fragment key={item.name + index}>
              <Tag name={item.name} color={item.color}/>
            </Fragment>
          ))}
        </div>
      </div>
      <div className={style.post__content}>
        <NotionRenderer recordMap={recordMap} components={{Code}}/>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const database = await getDatabase();
  return {
    paths: database.map((page) => ({params: {id: page.id}})),
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const {id} = context.params;
  const recordMap: ExtendedRecordMap = await getPostContent(id);
  const post: IPostDetail = await getPost(id)
  return {
    props: {
      post,
      recordMap,
    },
  };
};

export default Posts;
