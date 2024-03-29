import dayjs from 'dayjs';

const customFotmat = 'YYYY-MM-DD HH:mm:ss';

const formatName = (Name: any) => {
  const { title } = Name;
  return title[0].text.content;
};

const formatTags = (Tag: any) => {
  const { multi_select } = Tag;
  return multi_select.map((item: { name: string }) => {
    return {
      name: item.name
    };
  });
};

export const formatPage = (response: any): IPostDetail => {
  const {
    created_time,
    last_edited_time,
    properties: { Name, Tags }
  } = response;
  const name = formatName(Name);
  const tags = formatTags(Tags);
  const ctime = dayjs(created_time).format(customFotmat);
  const etime = dayjs(last_edited_time).format(customFotmat);
  return {
    name,
    ctime,
    etime,
    tags
  };
};
