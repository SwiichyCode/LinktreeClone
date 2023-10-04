import { ButtonLogout } from "@/app/_components/ui/ButtonLogout";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

type Props = {
  activeLogout?: boolean;
};

export const RightNavigation = ({ activeLogout }: Props) => {
  return (
    <nav className="float-right flex items-center space-x-4">
      {activeLogout && <ButtonLogout />}
      <ButtonLink
        href={URL_CONSTANT.PREVIEW}
        iconSrc="/icon-preview-header.svg"
        text="Preview"
      />
    </nav>
  );
};
