import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORAGE_CONSTANT } from "../_constants/storage.constant";

export interface Links {
  id: string;
  platform: string;
  url: string;
}

interface Profile {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
}

interface IPreviewStore {
  linksPreview: Links[];
  profilePreview: Profile;
  setLinkPreviews: (previews: Links[]) => void;
  setProfilePreview: (preview: Profile) => void;
}

export const usePreviewStore = create<IPreviewStore>()(
  persist(
    (set) => ({
      linksPreview: [],
      profilePreview: {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
      },
      setLinkPreviews: (previews) => set(() => ({ linksPreview: previews })),
      setProfilePreview: (preview) => set(() => ({ profilePreview: preview })),
    }),
    {
      name: STORAGE_CONSTANT.PREVIEW,
      getStorage: () => sessionStorage,
    }
  )
);
