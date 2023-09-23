import React from "react";
import { ButtonLink } from "../../ui/ButtonLink";

export const MiddleNavigation = () => {
  return (
    <nav className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <ButtonLink href="/" iconUrl="/icon-links-header" text="Links" />
      <ButtonLink
        href="/profile"
        iconUrl="/icon-profile-details-header"
        text="Profile Details"
      />
    </nav>
  );
};
