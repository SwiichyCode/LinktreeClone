import clsx from "clsx";

type Props = {
  isPreview?: boolean;
  children: React.ReactNode;
};

export const PageLayout = ({ isPreview, children }: Props) => {
  return (
    <div
      className={clsx(
        "relative min-h-screen md:p-6 bg-primary",
        isPreview &&
          "bg-white md:bg-primary before:content-[''] before:absolute before:top-0 before:left-0 before:h-[357px] before:w-full before:bg-purple before:rounded-b-[32px] z-10"
      )}
    >
      {children}
    </div>
  );
};
