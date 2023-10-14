type Props = {
  children: React.ReactNode;
};

export const FormCard = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-3 bg-primary rounded-xl p-5">
      {children}
    </div>
  );
};
