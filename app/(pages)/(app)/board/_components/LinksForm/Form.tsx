"use client";

import { useForm } from "react-hook-form";
import { EmptyLinks } from "@/app/_components/modules/links/components/FormEmpty";
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
  const { register, handleSubmit, setFocus } = useForm();
  const emptyLinks = !links.length;

  const onsubmit = handleSubmit((data) => {
    const dataWithId = data.links.map((link: any) => ({
      ...link,
      id: link.platform,
    }));

    console.log(dataWithId);
  });

  return (
    <form className="h-full" onSubmit={onsubmit}>
      <ButtonAdd addLink={addEmptyLink} />
      {emptyLinks && <EmptyLinks />}

      <LinksList links={links} removeLink={removeLink} register={register} />

      <ButtonSave emptyLinks={emptyLinks} />
    </form>
  );
};
