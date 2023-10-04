import { LogoutAction } from "@/app/_components/modules/auth/server/LogoutAction";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";

export const ButtonLogout = () => {
  return (
    <form action={LogoutAction}>
      <ButtonLink iconSrc="/icon-logout.svg" text="Logout" />
    </form>
  );
};
