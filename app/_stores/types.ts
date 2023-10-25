export type Link = {
  id: string;
  platform: string;
  url: string;
};

export type Profile = {
  picture?: any;
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
  firstname: string;
  lastname: string;
  email: string;
};
