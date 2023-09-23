import React from "react";
import { Button } from "@/app/_components/ui/Button";
import { ButtonLogout } from "@/app/(pages)/auth/_components/ButtonLogout";

type Props = {
  activeLogout?: boolean;
};

export const RightNavigation = ({ activeLogout }: Props) => {
  return (
    <nav className="float-right flex items-center space-x-4">
      {activeLogout && <ButtonLogout />}
      <Button
        href="/preview"
        iconUrl="/icon-preview-header.svg"
        theme="secondary"
        text="Preview"
      />
    </nav>
  );
};
