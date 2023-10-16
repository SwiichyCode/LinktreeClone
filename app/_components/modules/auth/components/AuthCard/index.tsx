import { AuthCardWrapper } from "../AuthCardWrapper";
import { Logo } from "@/app/_components/ui/Logo";
import { AuthCardHeader } from "../AuthCardHeader";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export const AuthCard = (props: Props) => {
  const { title, subtitle, children } = props;

  return (
    <AuthCardWrapper>
      <Logo from="auth" />
      <section className="w-full flex flex-col gap-10 sm:bg-white rounded-xl sm:p-10">
        <AuthCardHeader title={title} subtitle={subtitle} />
        {children}
      </section>
    </AuthCardWrapper>
  );
};
