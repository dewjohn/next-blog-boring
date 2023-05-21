interface IContact {
  icon: IconType;
  url: string;
}

interface INavList {
  title: string;
  url: string;
}

interface IConfig {
  name: string;
  avatar: StaticImageData | string;
  contact?: IContact[];
  navList: INavList[];
  emoji?: string[];
}
