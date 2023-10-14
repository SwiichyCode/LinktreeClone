import clsx from "clsx";
import Image from "next/image";

type Props = {
  text: string;
  iconUrl: string;
  submited?: boolean;
};

export const Notification = ({ text, iconUrl, submited }: Props) => {
  if (!submited) return null;

  return (
    <div
      className={clsx(
        "absolute bottom-0 left-2/4 -translate-y-1/2",
        "flex items-center gap-2 bg-darkgrey py-4 px-6 rounded-xl"
      )}
    >
      <Image src={iconUrl} width={20} height={20} alt="" />
      <span className="font-semibold text-lightgrey text-base">{text}</span>
    </div>
  );
};
