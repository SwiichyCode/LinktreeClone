import { AuthCardHeader } from "./AuthCardHeader";
import { AuthCardFooter } from "./AuthCardFooter";

type Props = {
  title: string;
  subtitle: string;
  state: "signin" | "signup";
  children: React.ReactNode;
};

export const AuthCard = ({ title, subtitle, state, children }: Props) => {
  return (
    <section className="w-full flex flex-col gap-10 bg-white rounded-xl p-10">
      <AuthCardHeader title={title} subtitle={subtitle} />
      {children}
      <AuthCardFooter state={state} />
    </section>
  );
};
