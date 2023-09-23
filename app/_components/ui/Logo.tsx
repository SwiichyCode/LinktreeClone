import clsx from "clsx";
import Link from "next/link";

type Props = {
  forHeader?: boolean;
  forAuth?: boolean;
};

export const Logo = ({ forHeader, forAuth }: Props) => {
  return (
    <Link
      href={forHeader ? "/" : "/auth/sign-in"}
      className={clsx(
        "w-8 h-10 bg-logo-mobile bg-no-repeat bg-left md:w-52 md:bg-logo-desktop ",
        forHeader && "absolute float-left top-2/4 -translate-y-2/4",
        forAuth && "w-52 bg-logo-desktop"
      )}
    />
  );
};
