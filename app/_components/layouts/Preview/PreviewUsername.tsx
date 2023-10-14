type Props = {
  username: string | undefined;
};

export const PreviewUsername = ({ username }: Props) => {
  return username ? (
    <span className="text-darkgrey text-xl font-semibold">{username}</span>
  ) : (
    <div className="w-40 h-4 bg-[#EEE] rounded-3xl mb-3" />
  );
};
