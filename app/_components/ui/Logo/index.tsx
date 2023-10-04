import clsx from "clsx";
import Link from "next/link";

type Props = {
  from: "header" | "auth";
};

const handleStyle = (from: Props["from"]) => {
  switch (from) {
    case "header":
      return "w-8 h-8 md:w-48 md:h-10 absolute float-left top-2/4 -translate-y-2/4 bg-logo-mobile md:bg-logo-desktop";
    case "auth":
      return "w-48 h-10 bg-logo-desktop";
  }
};

export const Logo = ({ from }: Props) => {
  const merged = clsx("bg-no-repeat", handleStyle(from));
  return <Link href="/" className={merged} />;
};
