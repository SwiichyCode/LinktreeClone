import clsx from "clsx";

type Props = {
  email: string | undefined;
  isPreview?: boolean;
};

export const PreviewEmail = ({ email, isPreview }: Props) => {
  return email ? (
    <span className={clsx("text-grey", isPreview && "text-base")}>{email}</span>
  ) : (
    <div className="w-[72px] h-2 bg-[#EEE] rounded-3xl" />
  );
};
