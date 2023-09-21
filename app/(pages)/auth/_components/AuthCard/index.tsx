import { AuthCardHeader } from "./AuthCardHeader";

type Props = {
  title: string;
  subtitle: string;
  state: "signin" | "signup";
  children: React.ReactNode;
};

export const AuthCard = ({ title, subtitle, children }: Props) => {
  return (
    <section className="w-full flex flex-col gap-10 sm:bg-white rounded-xl sm:p-10">
      <AuthCardHeader title={title} subtitle={subtitle} />
      {children}
    </section>
  );
};
