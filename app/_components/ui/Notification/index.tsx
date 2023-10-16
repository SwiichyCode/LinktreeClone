import clsx from "clsx";
import Image from "next/image";

type Props = {
  message: string;
  iconUrl: string;
  submitted?: boolean;
};

export const Notification = ({ message, iconUrl, submitted }: Props) => {
  if (!submitted) return null;

  return (
    <div
      className={clsx(
        "fixed bottom-6 left-2/4 -translate-x-1/2",
        "flex items-center gap-2 bg-darkgrey py-4 px-6 rounded-xl"
      )}
    >
      <Image src={iconUrl} width={20} height={20} alt="" />
      <span className="font-semibold text-lightgrey text-base">{message}</span>
    </div>
  );
};
