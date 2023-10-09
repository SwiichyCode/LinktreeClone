type Props = {
  children: React.ReactNode;
};

export const PreviewMockup = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-[308px] h-[632px] bg-illustration-phone">
      {children}
    </div>
  );
};
