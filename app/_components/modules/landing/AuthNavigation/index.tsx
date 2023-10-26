import React from "react";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

export const AuthNavigation = () => {
  return (
    <nav className="flex justify-end min-w-logo-desktop">
      <ButtonLink href={URL_CONSTANT.SIGN_IN} text="Login" variant="primary" />
    </nav>
  );
};
