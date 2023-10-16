import clsx from "clsx";

type Props = {
  fullname: string | undefined;
  isPreview?: boolean;
};

export const PreviewFullname = ({ fullname, isPreview }: Props) => {
  return fullname ? (
    <span
      className={clsx(
        "text-darkgrey font-semibold",
        isPreview ? "text-3xl" : "text-xl"
      )}
    >
      {fullname}
    </span>
  ) : (
    <div className="w-40 h-4 bg-[#EEE] rounded-3xl mb-3" />
  );
};
