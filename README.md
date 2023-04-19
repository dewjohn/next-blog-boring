
# next-blog-boring

A brief blog based on notion


## idea

I learn how to use notion api and nextjs to build a blog from [notion-blog-nextjs](https://github.com/samuelkraft/notion-blog-nextjs)

## demo

[https://next-blog-boring.vercel.app/](https://next-blog-boring.vercel.app/)

## how to use

1. [Fork](https://github.com/dewjohn/next-blog-boring/fork) the project to your repositories

2. add your personal infomation
- mkdir `config/index.ts` in project folder
- modify personal information in the following format

```
import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import avatarJpg from '@/public/avatar.jpg';

export const config: IConfig = {
  name: 'john',
  avatar: avatarJpg,
  contact: [
    {
      icon: AiFillGithub,
      url: 'https://www.github.com/dewjohn'
    },
    {
      icon: AiFillMail,
      url: 'mailto:deweizhong@outlook.com'
    }
  ],
  navList: [
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Archives',
      url: '/archives'
    }
  ]
};

```
- attention one
the project use [react icons](https://react-icons.github.io/), so remember to import icon in `config/index.ts`

- attention two
if you want to make you DIY pages, like about page, first you need to add about to navList and in `pages/` folder create a about.mdx.

3. import to [vercel](https://vercel.com/new)

- add Environment Variables

    ```NOTION_DATABASE_ID```

    ```NOTION_DATABASE_ID```


## License

[MIT](https://github.com/dewjohn/next-blog-boring/blob/main/LICENSE)
