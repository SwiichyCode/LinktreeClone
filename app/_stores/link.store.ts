import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORAGE_CONSTANT } from "@/app/_constants/storage.constant";

export type Link = {
  id: string;
  platform: string;
  url: string;
};

interface ILinkStore {
  links: Link[];
  setLinks: (links: Link[]) => void;
}

export const useLinkStore = create<ILinkStore>()(
  persist(
    (set) => ({
      links: [],
      setLinks: (links) => set(() => ({ links })),
    }),
    {
      name: "link-store",
      skipHydration: true,
    }
  )
);

export default useLinkStore;
