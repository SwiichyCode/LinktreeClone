import React from "react";
import { ButtonNavigation } from "../../ui/ButtonNavigation";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

export const MiddleNavigation = () => {
  return (
    <nav className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <ButtonNavigation
        href={URL_CONSTANT.LINKS}
        iconUrl="/icon-links-header"
        text="Links"
      />
      <ButtonNavigation
        href={URL_CONSTANT.PROFILE}
        iconUrl="/icon-profile-details-header"
        text="Profile Details"
      />
    </nav>
  );
};
