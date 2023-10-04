import { create } from "zustand";

type Link = {
  id: string;
  platform: string;
  url: string;
};

interface ILinkStore {
  links: Link[];
  setLink: (link: Link) => void;
  appendLink: () => void;
  removeLink: (platform: string) => void;
}

export const useLinkStore = create<ILinkStore>()((set) => ({
  links: [],
  setLink: (link) =>
    set((state) => ({
      links: [...state.links, link],
    })),

  appendLink: () =>
    set((state) => ({
      links: [
        ...state.links,
        {
          id: Math.random().toString(36).substr(2, 9),
          platform: "",
          url: "",
        },
      ],
    })),

  removeLink: (id) =>
    set((state) => ({
      links: state.links.filter((link) => link.id !== id),
    })),
}));
