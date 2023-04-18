interface IContact {
  icon: IconType;
  url: string;
}

interface INavBar {
  title: string;
  url: string;
}

interface IConfig {
  name: string;
  avatar: StaticImageData | string;
  contact: IContact[];
  navBar: INavBar[];
}
