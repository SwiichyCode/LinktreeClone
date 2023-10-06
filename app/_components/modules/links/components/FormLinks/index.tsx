"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFetchLink } from "@/app/_hooks/useFetchLink";
import { useLinkStore } from "@/app/_stores/link.store";
import { FormSave } from "../FormSave";
import { FormEmpty } from "../FormEmpty";
import type { Link } from "@/app/_stores/link.store";
import { LinksGenerator } from "../LinksGenerator";
import { useEffect, useMemo } from "react";
import { useStore } from "zustand";

export type FormValues = {
  links: Link[];
};

export const FormLinks = () => {
  const links = useStore(useLinkStore, (state) => state.links);
  const { setLinks } = useLinkStore();
  const { status, error } = useFetchLink();
  const { control, register, handleSubmit, reset, watch } =
    useForm<FormValues>();
    // {
    //   reValidateMode: "onChange",
    //   defaultValues: useMemo(() => {
    //     return { links: links };
    //   }, [links]),
    // }

  console.log("links", links);

  const values = watch("links");

  useEffect(() => {
    if (status === "success") {
      reset({ links: links });
    }
  }, [links, status]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLinks(data.links);
  };

  return (
    <form
      className="h-full flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <LinksGenerator control={control} register={register}>
        {!links?.length && status === "success" && <FormEmpty />}
      </LinksGenerator>

      <FormSave links={links} values={values} />
    </form>
  );
};
