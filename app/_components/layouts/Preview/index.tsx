"use client";
import clsx from "clsx";
import { usePreviewStore } from "@/app/_stores/preview.store";
import { PreviewMockup } from "./PreviewMockup";
import { PreviewProfile } from "./PreviewProfile";
import { PreviewLinks } from "./PreviewLinks";
import { useStore } from "@/app/_stores/useStore";

export const Preview = () => {
  const linksPreview = useStore(usePreviewStore, (state) => state.linksPreview);
  const profilePreview = useStore(
    usePreviewStore,
    (state) => state.profilePreview
  );

  return (
    <div
      className={clsx(
        "hidden bg-white rounded-xl",
        "lg:flex lg:justify-center lg:items-center lg:min-w-[560px] md:max-h-board-desktop"
      )}
    >
      <PreviewMockup>
        <PreviewProfile />

        <PreviewLinks linksPreview={linksPreview} />
      </PreviewMockup>
    </div>
  );
};
