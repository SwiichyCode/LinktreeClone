import clsx from "clsx";

type Props = {
  children: React.ReactNode;
};

export const AuthCardWrapper = ({ children }: Props) => {
  return (
    <div
      className={clsx(
        "w-full max-w-xs flex flex-col gap-16",
        "sm:max-w-md sm:items-center sm:gap-12"
      )}
    >
      {children}
    </div>
  );
};
