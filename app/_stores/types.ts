export type Link = {
  id: string;
  platform: string;
  url: string;
};

export type Profile = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
};

export type Data = {
  id: string;
  username: string;
  links: Link[];
  firstname: string;
  lastname: string;
  email: string;
};
