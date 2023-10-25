import clsx from "clsx";

type Props = {
  pictureURL: string | undefined;
};

export const ImageFieldButton = ({ pictureURL }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className={clsx(
          "absolute font-semibold z-40",
          pictureURL ? "text-white" : "text-purple"
        )}
      >
        {pictureURL ? "Change Image" : "+ Upload Image"}
      </span>
    </div>
  );
};
