type Props = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: Props) => {
  return <main className="rounded-xl bg-white m-4 p-6">{children}</main>;
};
