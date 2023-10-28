import { useCookie } from "@/app/_hooks/useCookie";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

export const AuthNavigation = () => {
  const user = useCookie("user_id");

  return (
    <nav className="hidden md:flex justify-end min-w-logo-desktop">
      {user ? (
        <ButtonLink href={URL_CONSTANT.LINKS} text="Board" variant="primary" />
      ) : (
        <ButtonLink
          href={URL_CONSTANT.SIGN_IN}
          text="Login"
          variant="primary"
        />
      )}
    </nav>
  );
};
