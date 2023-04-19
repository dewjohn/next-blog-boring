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
      url: 'mailto:xxx@yyy.com'
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
