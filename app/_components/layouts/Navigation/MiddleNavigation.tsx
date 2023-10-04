import React from "react";
import { ButtonNavigation } from "../../ui/ButtonNavigation";

export const MiddleNavigation = () => {
  return (
    <nav className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <ButtonNavigation href="/" iconUrl="/icon-links-header" text="Links" />
      <ButtonNavigation
        href="/profile"
        iconUrl="/icon-profile-details-header"
        text="Profile Details"
      />
    </nav>
  );
};
