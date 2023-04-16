import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';
import type { ExtendedRecordMap } from 'notion-types';
import { formatPage } from '@/lib/format/formatPost';

const notion = new NotionAPI();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

const notionClient = new Client({
  auth: NOTION_TOKEN
});

export const getDatabase = async (page_size: number = 100) => {
  const queryResponse = await notionClient.databases.query({
    database_id: NOTION_DATABASE_ID!,
    page_size
  });
  return queryResponse.results.map((item) => {
    if (!('properties' in item)) return {};
    const title = item.properties.Name;
    const created_time = item.created_time;
    const id = item.id;
    return {
      id,
      title,
      created_time
    };
  });
};

export const getPost = async (pageId: string) => {
  const response = await notionClient.pages.retrieve({ page_id: pageId });
  return formatPage(response);
};

export const getPostContent = async (pageId: string) => {
  const recordMap: ExtendedRecordMap = await notion.getPage(pageId);
  return recordMap;
};
