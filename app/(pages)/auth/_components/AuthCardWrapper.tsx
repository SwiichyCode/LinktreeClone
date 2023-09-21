import { Logo } from "@/app/_components/ui/Logo";

type Props = {
  children: React.ReactNode;
};

export const AuthCardWrapper = ({ children }: Props) => {
  return (
    <div className="w-full max-w-md flex flex-col items-center gap-12">
      <Logo size="large" />
      {children}
    </div>
  );
};
