import React from "react";
import { Hamburger } from "./Hamburger";

export const MenuMobile = () => {
  return (
    <div className="md:hidden">
      <Hamburger />
    </div>
  );
};
