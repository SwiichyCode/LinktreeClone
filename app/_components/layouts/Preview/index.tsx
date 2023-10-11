"use client";
import clsx from "clsx";
import { usePreviewStore } from "@/app/_stores/preview.store";
import { PreviewMockup } from "./PreviewMockup";
import { PreviewProfile } from "./PreviewProfile";
import { PreviewLinks } from "./PreviewLinks";

export const Preview = () => {
  const { linksPreview } = usePreviewStore();

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
