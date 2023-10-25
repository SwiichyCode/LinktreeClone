import clsx from "clsx";

type Props = {
  pictureURL?: string;
  isPreview?: boolean;
};

export const PreviewPicture = ({ pictureURL, isPreview }: Props) => {
  return (
    <div
      className={clsx(
        "bg-[#EEE] rounded-full mb-6",
        isPreview ? "w-[104px] h-[104px]" : "w-24 h-24"
      )}
      style={{
        backgroundImage: `url(${pictureURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};
