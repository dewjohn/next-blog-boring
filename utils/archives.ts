import dayjs from 'dayjs';

const customFotmat = 'YYYY-MM-DD';

export const formateArchives = (posts: any) => {
  const formatPosts: formatePost = {};
  posts.forEach((item: Post) => {
    const year = item.created_time.slice(0, 4);
    item.created_time = dayjs(item.created_time).format(customFotmat);
    item.title = item.title.title[0].text.content;
    if (formatPosts[year]) {
      formatPosts[year].push(item);
    } else {
      formatPosts[year] = [item];
    }
  });
  return formatPosts;
};
