import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main
      className={clsx(
        "flex min-h-board-mobile rounded-xl bg-white m-4 p-6",
        "md:min-h-board-desktop md:m-6 md:p-10"
      )}
    >
      {children}
    </main>
  );
}
