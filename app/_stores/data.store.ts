import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { STORAGE_CONSTANT } from "@/app/_constants/storage.constant";
import type { Link, Profile } from "./types";

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
      storage: createJSONStorage(() => sessionStorage),
      skipHydration: true,
    }
  )
);
