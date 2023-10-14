type Props = {
  fullname: string | undefined;
};

export const PreviewFullname = ({ fullname }: Props) => {
  return fullname ? (
    <span className="text-darkgrey text-xl font-semibold">{fullname}</span>
  ) : (
    <div className="w-40 h-4 bg-[#EEE] rounded-3xl mb-3" />
  );
};
