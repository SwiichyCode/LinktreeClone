type Props = {
  email: string | undefined;
};

export const PreviewEmail = ({ email }: Props) => {
  return email ? (
    <span className=" text-grey">{email}</span>
  ) : (
    <div className="w-[72px] h-2 bg-[#EEE] rounded-3xl" />
  );
};
