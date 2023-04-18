import { AiFillGithub, AiFillMail } from 'react-icons/all';
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
  navBar: [
    {
      title: 'About',
      url: '/about'
    },
  ]
};
