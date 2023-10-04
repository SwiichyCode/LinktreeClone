import { TextField } from "@/app/_components/ui/TextField";
import React from "react";

type Props = {
  register: any;
  setFocus: any;
  platform: string;
};

export const LinkUrl = ({ register, setFocus, platform }: Props) => {
  return (
    <TextField
      labelText="Link"
      name={platform}
      iconUrl="/icon-links-header.svg"
      placeholder="e.g. https://www.github.com/"
      register={register}
      error={null}
    />
  );
};
