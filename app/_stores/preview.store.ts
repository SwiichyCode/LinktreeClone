import { create } from "zustand";

export interface Links {
  id: string;
  platform: string;
  url: string;
}

interface Profile {
  name: string;
  email: string;
}

interface IPreviewStore {
  linksPreview: Links[];
  setLinkPreviews: (previews: Links[]) => void;
}

export const usePreviewStore = create<IPreviewStore>()((set) => ({
  linksPreview: [],
  setLinkPreviews: (previews) => set(() => ({ linksPreview: previews })),
}));
