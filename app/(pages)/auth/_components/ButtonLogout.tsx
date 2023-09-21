import { Button } from "@/app/_components/ui/Button";
import { LogoutAction } from "../_actions/LogoutAction";

export const ButtonLogout = () => {
  return (
    <form action={LogoutAction}>
      <Button text="Logout" />
    </form>
  );
};
