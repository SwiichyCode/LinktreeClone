export type Link = {
  id: string;
  platform: string;
  url: string;
};

export type Profile = {
  picture?: any;
  pictureFromStorage?: any;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
};

export type Data = {
  id: string;
  username: string;
  links: Link[];
  picture?: any;
  pictureFromStorage?: any;
  firstname: string;
  lastname: string;
  email: string;
};
