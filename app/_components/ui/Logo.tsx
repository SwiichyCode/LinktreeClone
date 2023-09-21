import Image from "next/image";

type Props = {
  size: "small" | "large";
};

export const Logo = ({ size = "large" }: Props) => {
  return size === "large" ? (
    <Image src="/logo-devlinks-large.svg" alt="Logo" width={200} height={200} />
  ) : (
    <Image src="/logo-devlinks-small.svg" alt="Logo" width={50} height={50} />
  );
};
