import clsx from "clsx";
import { Logo } from "@/app/_components/ui/Logo";
import { Navigation } from "../Navigation";
import { AuthNavigation } from "../AuthNavigation";
import { MenuMobile } from "../MenuMobile";

export const Header = () => {
  return (
    <header
      className={clsx(
        "flex items-center justify-between h-20 m-auto mb-14",
        "md:max-w-6xl md:h-24 md:mb-20"
      )}
    >
      <Logo from="landing" />
      <Navigation />
      <AuthNavigation />
      <MenuMobile />
    </header>
  );
};
