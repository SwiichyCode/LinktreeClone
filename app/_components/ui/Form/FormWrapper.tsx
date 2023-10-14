type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
};

export const FormWrapper = ({ onSubmit, children }: Props) => {
  return (
    <form
      className="h-full flex flex-col justify-between gap-6"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
