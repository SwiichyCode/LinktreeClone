import clsx from "clsx";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const SectionContainer = ({ className, children }: Props) => {
  const merged = clsx("m-auto md:max-w-6xl mb-8 md:mb-14 lg:mb-32", className);
  return <section className={merged}>{children}</section>;
};
