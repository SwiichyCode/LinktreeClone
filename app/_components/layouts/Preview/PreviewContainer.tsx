import clsx from "clsx";

type Props = {
  isPreview?: boolean;
  children?: React.ReactNode;
};

export const PreviewContainer = ({ isPreview, children }: Props) => {
  return isPreview ? (
    <div className="relative w-[369px] min-h-[569px] md:bg-white m-auto rounded-3xl md:shadow-card py-12 px-14">
      {children}
    </div>
  ) : (
    <div
      className={clsx(
        "hidden bg-white rounded-xl",
        "lg:flex lg:justify-center lg:items-center lg:min-w-[560px] md:max-h-board-desktop"
      )}
    >
      {children}
    </div>
  );
};
