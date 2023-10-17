import clsx from "clsx";

type Props = {
  isPreview?: boolean;
  isProfile?: boolean;
  children: React.ReactNode;
};

export const PageLayout = ({ isPreview, isProfile, children }: Props) => {
  return (
    <div
      className={clsx(
        "relative min-h-screen md:p-6 bg-primary",
        isProfile && "flex justify-center items-center",
        isPreview &&
          "bg-white md:bg-primary md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-0 md:before:h-[357px] md:before:w-full md:before:bg-purple md:before:rounded-b-[32px] z-10"
      )}
    >
      {children}
    </div>
  );
};
