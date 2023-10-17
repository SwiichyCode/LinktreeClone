"use client";

import { usePreviewStore } from "@/app/_stores/preview.store";
import { PreviewMockup } from "./PreviewMockup";
import { PreviewProfile } from "./PreviewProfile";
import { PreviewLinks } from "./PreviewLinks";
import { PreviewContainer } from "./PreviewContainer";
import { useStore } from "@/app/_stores/useStore";

type Props = {
  isPreview?: boolean;
};

export const Preview = ({ isPreview }: Props) => {
  const linksPreview = useStore(usePreviewStore, (state) => state.linksPreview);
  const profilePreview = useStore(
    usePreviewStore,
    (state) => state.profilePreview
  );

  return (
    <PreviewContainer isPreview={isPreview}>
      {isPreview ? (
        <>
          <PreviewProfile profilePreview={profilePreview} isPreview />
          <PreviewLinks linksPreview={linksPreview} isPreview />
        </>
      ) : (
        <PreviewMockup>
          <PreviewProfile profilePreview={profilePreview} />
          <PreviewLinks linksPreview={linksPreview} />
        </PreviewMockup>
      )}
    </PreviewContainer>
  );
};
