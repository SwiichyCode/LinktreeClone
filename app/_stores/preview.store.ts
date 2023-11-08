import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORAGE_CONSTANT } from "../_constants/storage.constant";
import type { Link, Profile } from "./types";

interface IPreviewStore {
  linksPreview: Link[];
  profilePreview: Profile;
  setPreview: (linksPreview: Link[], profilePreview: Profile) => void;
  setLinkPreviews: (linksPreview: Link[]) => void;
  setProfilePreview: (profilePreview: Profile) => void;
}

export const usePreviewStore = create<IPreviewStore>()(
  persist(
    (set) => ({
      linksPreview: [],
      profilePreview: {
        picture: "",
        pictureFromStorage: "",
        username: "",
        firstname: "",
        lastname: "",
        email: "",
      },
      setPreview: (linksPreview, profilePreview) =>
        set(() => ({ linksPreview, profilePreview })),
      setLinkPreviews: (linksPreview) => set(() => ({ linksPreview })),
      setProfilePreview: (profilePreview) => set(() => ({ profilePreview })),
    }),
    {
      name: STORAGE_CONSTANT.PREVIEW,
      skipHydration: false,
      getStorage: () => sessionStorage,
    }
  )
);
