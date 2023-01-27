import {
  GetDatabaseResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

const formatPosts = (results: QueryDatabaseResponse) => {
  const result = results.results
  return result.map((item, index) => {
    return {
      create_time: item.
    }
  })
};

export { formatPosts };
