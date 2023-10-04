"use client";

import { LinksList } from "@/app/(pages)/(app)/board/_components/LinksList";
import { useLinkStore } from "@/app/(pages)/(app)/board/_stores/useLinkStore";
import { useForm } from "react-hook-form";
import { ButtonAppend } from "../ButtonAppend";
import { FormSave } from "../FormSave";
import { FormEmpty } from "../FormEmpty";

export const FormLinks = () => {
  const { links, appendLink, removeLink } = useLinkStore();
  const { register, handleSubmit } = useForm();

  return (
    <form className="h-full flex flex-col justify-between">
      <div className="flex flex-col space-y-4">
        <ButtonAppend appendLink={appendLink} />

        {links.length ? (
          <LinksList
            links={links}
            removeLink={removeLink}
            register={register}
          />
        ) : (
          <FormEmpty />
        )}

        {/* <LinksList links={links} removeLink={removeLink} register={register} /> */}
      </div>

      <FormSave />
    </form>
  );
};
