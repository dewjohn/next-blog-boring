import { Client } from '@notionhq/client';
import { formatPage } from './format/formatPage';

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: NOTION_TOKEN,
});

export const getDatabase = async () => {
  const queryResponse = await notion.databases.query({
    database_id: NOTION_DATABASE_ID!,
  });
  return queryResponse.results.map((item) => {
    if (!('properties' in item)) return {};
    const title = item.properties.Name;
    const created_time = item.created_time;
    const id = item.id;
    return {
      id,
      title,
      created_time,
    };
  });
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return formatPage(response);
};

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};
