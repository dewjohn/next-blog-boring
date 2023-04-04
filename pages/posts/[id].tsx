import style from '@/styles/post.module.scss';
import { getBlocks, getDatabase, getPage } from '@/lib/notion';
import React, { Fragment } from 'react';
import type { IPage } from '@/types/post';
import Tag from '../component/tag';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import Text from '../component/text';
import Image from 'next/image';

const renderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];
  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <Text text={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <Text text={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <Text text={value.rich_text} />
        </h3>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <Text text={value.rich_text} />
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type='checkbox' id={id} defaultChecked={value.checked} />{' '}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block: any) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.rich_text}</p>;
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0].plain_text : '';
      return (
        <figure>
          <img src={src} alt='img' width='100%' />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
};

const Posts = ({ page, block }: { page: IPage; block: any }) => {
  return (
    <div className={style.post}>
      <div className={style.post__header}>
        <div className={style.post__title}>
          <h1>{page.name}</h1>
        </div>
        <div className={style.post__time}>
          <span data-tip='创建时间'>
            <AiOutlineCalendar />{' '}
            {page.ctime}
          </span>
          <span data-tip='修改时间'>
            <AiOutlineClockCircle />{' '}
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
      <div className={style.post__content}>
        {block.map((block: any) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const database = await getDatabase();
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
