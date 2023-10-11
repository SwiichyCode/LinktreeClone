import { Preview } from "@/app/_components/layouts/Preview";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main
      className={clsx(
        "flex min-h-board-mobile gap-6 m-4",
        "md:min-h-board-desktop md:m-6"
      )}
    >
      <Preview />
      {children}
    </main>
  );
}
