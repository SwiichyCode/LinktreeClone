import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORAGE_CONSTANT } from "@/app/_constants/storage.constant";

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

interface ILinkStore {
  links: Link[];
  profile: Profile;
  setData: (links: Link[], profile: Profile) => void;
  setLinks: (links: Link[]) => void;
  setProfile: (profile: Profile) => void;
}

export const useDataStore = create<ILinkStore>()(
  persist(
    (set) => ({
      links: [],
      profile: {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
      },
      setData: (links, profile) => set(() => ({ links, profile })),
      setLinks: (links) => set(() => ({ links })),
      setProfile: (profile) => set(() => ({ profile })),
    }),
    {
      name: STORAGE_CONSTANT.DATA,
      skipHydration: true,
    }
  )
);
