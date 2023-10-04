import clsx from "clsx";
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
    <div
      className={clsx(
        "w-full max-w-xs flex flex-col gap-16",
        "sm:max-w-md sm:items-center sm:gap-12"
      )}
    >
      <Logo from="auth" />
      <section className="w-full flex flex-col gap-10 sm:bg-white rounded-xl sm:p-10">
        <AuthCardHeader title={title} subtitle={subtitle} />
        {children}
      </section>
    </div>
  );
};
