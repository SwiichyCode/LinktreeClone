"use client";

import { useForm } from "react-hook-form";
import { LinksFormEmpty } from "./FormEmpty";
import { ButtonAdd } from "./ButtonAdd";
import { ButtonSave } from "./ButtonSave";
import { LinksList } from "../LinksList";
import { useStoreLink } from "../../_stores/useLinkStore";

export type LinkType = {
  id: string;
  platform: string;
  url: string;
};

export const Form = () => {
  const { links, addEmptyLink, removeLink } = useStoreLink();
  const emptyLinks = !links.length;

  const { register, handleSubmit, setFocus } = useForm();

  const onsubmit = handleSubmit((data) => {
    const dataWithId = data.links.map((link: any) => ({
      ...link,
      id: link.platform,
    }));

    console.log(dataWithId);
  });

  console.log(links);

  return (
    <form onSubmit={onsubmit}>
      <ButtonAdd addLink={addEmptyLink} />
      {emptyLinks && <LinksFormEmpty />}

      <LinksList
        links={links}
        removeLink={removeLink}
        register={register}
        setFocus={setFocus}
      />

      <ButtonSave emptyLinks={emptyLinks} />
    </form>
  );
};
