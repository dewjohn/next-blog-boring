
# next-blog-boring

一个基于notion的小博客

# 截图
![https://raw.githubusercontent.com/dewjohn/next-blog-boring/main/screenshot/screenshot1.png](https://raw.githubusercontent.com/dewjohn/next-blog-boring/main/screenshot/screenshot1.png)

![https://raw.githubusercontent.com/dewjohn/next-blog-boring/main/screenshot/screenshot2.png](https://raw.githubusercontent.com/dewjohn/next-blog-boring/main/screenshot/screenshot2.png)

![https://raw.githubusercontent.com/dewjohn/next-blog-boring/main/screenshot/screenshot3.png](https://raw.githubusercontent.com/dewjohn/next-blog-boring/main/screenshot/screenshot3.png)

## 关于

此项目灵感来自 [notion-blog-nextjs](https://github.com/samuelkraft/notion-blog-nextjs)

## demo

[https://next-blog-boring.vercel.app/](https://next-blog-boring.vercel.app/)

## 如何使用

### 1. [Fork](https://github.com/dewjohn/next-blog-boring/fork) 此项目

### 2. 修改你的个人信息
- `git clone`你 fork 之后的项目，然后新建`config`目录，在`config`目录下新建配置文件 `index.ts`
- 按照下面的格式修改成你的个人信息

```
import { AiFillGithub, AiFillMail } from 'react-icons/ai'; // import react icons
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
      url: 'mailto:xxx@yyy.com'
    }
  ],
  navList: [
    {
      title: 'Archives',
      url: '/archives'
    },
    {
      title: '显示的名称',  // 同时记得在 pages/ 目录下创建 链接.mdx 文件
      url: '/链接'
    }
  ],
  emoji: [
  '😜',
  '🤤',
  '🤪',
  '😳',
  '😍',
  '❤️',
  '🤭',
  '🥰',
  '😵‍💫',
  '😇',
  '😓',
  '🤣'
] // 单击主页空白区域随机弹出emoji表情，若数组留空，则不显示
};

```
- 注意

  项目用了 [react icons](https://react-icons.github.io/), 所以当你使用了 icon ，记得像示例一样在顶部导入

  如果你想要自定义页面，并能通过点击博客顶部的导航条进入该页面，则需要做以下工作：
  
    1. 在 `config/index.ts` 配置文件中，仿照 `navList` 写上你的导航项目，如：

    ```
      {
        title: 'About',
        url: '/about'
      },
    ``` 
      
    2. 在 `pages/` 目录下创建相应文件.mdx，比如上面创建了 About 页面，那就在 `pages` 目录下创建 `about.mdx`

    3. 接下来就可以按照 `markdown` 语法书写内容了

- 完整实例

  可以查看当前demo网站的配置，查看如何书写`config`配置文件

  [https://github.com/asdjohn/blog/blob/main/config/index.ts](https://github.com/asdjohn/blog/blob/main/config/index.ts)


- 更新完你的个人信息后推送到你的仓库

  ```
  git push origin main
  ```
### 3. 找到 notion key

创建 `notion` 数据库，复刻（右上角Duplicate）  [notion database table](https://dewjohn.notion.site/23900ff399914a75a99a896e4b7adffe?v=c7b84928c51f40ffa7abd215c68bc225) 到你的 notion 账号中，然后点击项目右上角的`share`，把`Share to web`打开

打开[https://www.notion.com/my-integrations](https://www.notion.com/my-integrations)，创建一个`integration`，创建好就能获取`NOTION_TOKEN`，如图：
![https://files.readme.io/cbbd7c3-create_integration.gif](https://files.readme.io/cbbd7c3-create_integration.gif)

而`NOTION_DATABASE_ID`就是你的项目链接上的一串字符
![https://files.readme.io/62e5027-notion_database_id.png](https://files.readme.io/62e5027-notion_database_id.png)


更详细教程可以查看 [getting started guide](https://developers.notion.com/docs/create-a-notion-integration) 找到`NOTION_TOKEN` 和 `NOTION_DATABASE_ID`


### 4. 部署到 [vercel](https://vercel.com/new)

点击 [vercel](https://vercel.com/new) 此链接，选择刚才 fork 到你仓库的项目，然后在 导入项目页面 `Environment Variables` 中填入刚获取的 `NOTION_TOKEN` 和 `NOTION_DATABASE_ID` 即可成功部署

```
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

### 5. 写作

至此，在 `notion` 中写作，即可在博客看到刚在notion写的笔记，无需重新部署项目🤗



### 6. 关于无缝更新

先设置远程仓库
```
git remote add upstream git@github.com:dewjohn/next-blog-boring.git
```
只要执行

```
git pull upstream main
```

即可更新到最新分支

然后再执行，推送到你的仓库

```
git push origin main
```

推送完毕，`vercel`自动重新构建，完成丝滑更新


### 7. 本地开发

安装 `pnpm`

```
npm install -g pnpm
```

安装项目所需依赖

```
pnpm i
```

添加本地环境变量 `NOTION_TOKEN`和`NOTION_DATABASE_ID`

在项目根目录新建 `.env` 文件

```
NOTION_TOKEN = 你的NOTION_TOKEN
NOTION_DATABASE_ID = 你的NOTION_DATABASE_ID
```

启动开发

```
pnpm dev
```

## to do

- [ ] 增加SEO
- [ ] 增加代码块highlight.js高亮
- [ ] 等等改进


## License

[MIT](https://github.com/dewjohn/next-blog-boring/blob/main/LICENSE)

