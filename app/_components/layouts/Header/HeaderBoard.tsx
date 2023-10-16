import { HeaderWrapper } from "./HeaderWrapper";
import { Logo } from "@/app/_components/ui/Logo";
import { MiddleNavigation } from "../Navigation/MiddleNavigation";
import { RightNavigation } from "../Navigation/RightNavigation";

export const HeaderBoard = () => {
  return (
    <HeaderWrapper className="relative overflow-hidden mb-6">
      <Logo from="header" />
      <MiddleNavigation />
      <RightNavigation activeLogout={true} />
    </HeaderWrapper>
  );
};
