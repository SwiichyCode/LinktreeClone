import { Button } from "@/app/_components/ui/Button";
import { ButtonLogout } from "@/app/(pages)/auth/_components/ButtonLogout";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";

type Props = {
  activeLogout?: boolean;
};

export const RightNavigation = ({ activeLogout }: Props) => {
  return (
    <nav className="float-right flex items-center space-x-4">
      {activeLogout && <ButtonLogout />}
      <ButtonLink
        href="/preview"
        iconSrc="icon-preview-header.svg"
        text="Preview"
      />
    </nav>
  );
};
