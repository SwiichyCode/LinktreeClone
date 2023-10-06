"use client";

import { LogoutAction } from "@/app/_components/modules/auth/server/LogoutAction";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";
import { STORAGE_CONSTANT } from "@/app/_constants/storage.constant";

export const ButtonLogout = () => {
  const handleLogout = () => {
    localStorage.removeItem(STORAGE_CONSTANT.LINK);
  };

  return (
    <form action={LogoutAction}>
      <ButtonLink
        iconSrc="/icon-logout.svg"
        text="Logout"
        onClick={handleLogout}
      />
    </form>
  );
};
