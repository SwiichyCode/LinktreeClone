import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div
      className={clsx(
        "flex justify-center h-screen p-8 bg-primary",
        "sm:items-center"
      )}
    >
      {children}
    </div>
  );
}
