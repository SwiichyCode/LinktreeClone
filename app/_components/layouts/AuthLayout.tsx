import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <div
      className={clsx("flex justify-center h-screen p-8", "sm:items-center")}
    >
      {children}
    </div>
  );
};
