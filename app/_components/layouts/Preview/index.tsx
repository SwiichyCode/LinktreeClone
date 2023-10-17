"use client";
import { useStore } from "@/app/_stores/useStore";
import { usePreviewStore } from "@/app/_stores/preview.store";
import { PreviewMockup } from "./PreviewMockup";
import { PreviewProfile } from "./PreviewProfile";
import { PreviewLinks } from "./PreviewLinks";
import { PreviewContainer } from "./PreviewContainer";
import type { Data, Profile } from "@/app/_stores/types";

type Props = {
  isPreview?: boolean;
  isProfile?: boolean;
  data?: Data[] | null;
};

export const Preview = ({ isPreview, isProfile, data }: Props) => {
  const linksPreview = useStore(usePreviewStore, (state) => state.linksPreview);
  const profilePreview = useStore(
    usePreviewStore,
    (state) => state.profilePreview
  );

  const { username, firstname, lastname, email, links } = data?.[0] || {};
  const profile = { username, firstname, lastname, email } as Profile;

  return (
    <PreviewContainer isPreview={isPreview}>
      {isPreview ? (
        <>
          <PreviewProfile
            profilePreview={isProfile ? profile : profilePreview}
            isPreview
          />
          <PreviewLinks
            linksPreview={isProfile ? links : linksPreview}
            isPreview
          />
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
