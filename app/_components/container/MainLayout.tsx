import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main
      className={clsx(
        "flex min-h-board-mobile gap-6 px-6 pb-6",
        "md:min-h-board-desktop md:px-0 md:pb-0"
      )}
    >
      {children}
    </main>
  );
};
