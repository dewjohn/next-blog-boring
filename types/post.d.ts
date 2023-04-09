interface Post {
  id: string;
  created_time: string;
  title: any;
}

interface Ipost {
  posts: Post[];
}

interface IPostDetail {
  ctime: dayjs.Dayjs;
  etime: dayjs.Dayjs;
  name: string;
  tags: ITag[];
}

interface ITag {
  name: string;
  color: string;
}

interface formatePost {
  [index: string]: Post[];
}
