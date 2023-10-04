import React, { useState } from "react";
import { LinkType } from "../LinksForm/Form";
import { LinkHeader } from "./LinkHeader";
import { LinkUrl } from "./LinkUrl";

type Props = {
  index: number;
  link: LinkType;
  removeLink: (id: string) => void;
  register: any;
  setFocus: any;
};

export const LinksContent = ({
  index,
  link,
  removeLink,
  register,
  setFocus,
}: Props) => {
  const [platform, setPlatform] = useState("Instagram");
  const { platform: P } = link;

  return (
    <div className="flex flex-col gap-3 bg-primary rounded-xl p-5">
      <LinkHeader index={index} removeLink={() => removeLink(P)} />
      <select
        className="w-full h-10 rounded-lg bg-primary"
        {...register(`links.${index}.platform`)}
      >
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="Twitter">Twitter</option>
      </select>
      <input
        className="w-full h-10 rounded-lg bg-primary"
        {...register(`links.${index}.url`)}
      />
      {/* <LinkUrl register={register} setFocus={setFocus} platform={platform} /> */}
    </div>
  );
};
