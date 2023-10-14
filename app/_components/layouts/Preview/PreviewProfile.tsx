import type { Profile } from "@/app/_stores/data.store";
import { PreviewUsername } from "./PreviewUsername";
import { PreviewEmail } from "./PreviewEmail";
import { PreviewFullname } from "./PreviewFullname";
import { PreviewPicture } from "./PreviewPicture";

type Props = {
  profilePreview: Profile | undefined;
};

export const PreviewProfile = ({ profilePreview }: Props) => {
  const { username, firstname, lastname, email } = profilePreview || {};

  const handleFullname = () => {
    if (!firstname && !lastname) return "";

    return `${firstname} ${lastname}`;
  };

  return (
    <div className="flex flex-col items-center mb-14">
      <PreviewPicture />
      <PreviewFullname fullname={handleFullname()} />
      <PreviewEmail email={email} />
    </div>
  );
};
