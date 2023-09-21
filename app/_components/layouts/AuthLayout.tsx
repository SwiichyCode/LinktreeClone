type Props = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
};
