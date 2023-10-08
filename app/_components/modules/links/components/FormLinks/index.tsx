"use client";
import { useEffect, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFetchLink } from "@/app/_hooks/useFetchLink";
import { useLinkStore } from "@/app/_stores/link.store";
import { useStore } from "@/app/_stores/useStore";
import { LinksGenerator } from "../LinksGenerator";
import { FormSave } from "../FormSave";
import { FormEmpty } from "../FormEmpty";
import type { Link } from "@/app/_stores/link.store";

export type FormValues = {
  links: Link[];
};

type Props = {
  userId: string | undefined;
};

export const FormLinks = ({ userId }: Props) => {
  const links = useStore(useLinkStore, (state) => state.links);
  const { setLinks } = useLinkStore();
  const { status, error } = useFetchLink({ userId });
  const { control, register, handleSubmit, reset, watch } = useForm<FormValues>(
    {
      reValidateMode: "onChange",
      defaultValues: useMemo(() => {
        return { links: links };
      }, [links]),
    }
  );

  const values = watch("links");

  useEffect(() => {
    if (status === "success") {
      reset({ links: links });
    }
  }, [links]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
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
