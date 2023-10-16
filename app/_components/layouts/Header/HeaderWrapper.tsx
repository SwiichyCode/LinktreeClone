import clsx from "clsx";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const HeaderWrapper = ({ className, children }: Props) => {
  return (
    <header className={clsx("bg-white py-4 px-6 md:rounded-xl", className)}>
      {children}
    </header>
  );
};
