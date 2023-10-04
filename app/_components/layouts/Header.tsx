import clsx from "clsx";
import { Logo } from "@/app/_components/ui/Logo";
import { MiddleNavigation } from "./Navigation/MiddleNavigation";
import { RightNavigation } from "./Navigation/RightNavigation";

export const Header = () => {
  return (
    <header
      className={clsx(
        "relative overflow-hidden bg-white py-4 px-6 md:rounded-xl md:m-6"
      )}
    >
      <Logo from="header" />
      <MiddleNavigation />
      <RightNavigation activeLogout={true} />
    </header>
  );
};
