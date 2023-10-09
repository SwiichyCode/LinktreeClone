"use client";
import { z } from "zod";
import { useState, useEffect, useMemo, useTransition } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchLink } from "@/app/_hooks/useFetchLink";
import { useLinkStore } from "@/app/_stores/link.store";
import { usePreviewStore } from "@/app/_stores/preview.store";
import { useStore } from "@/app/_stores/useStore";
import { LinksGenerator } from "../LinksGenerator";
import { FormSave } from "../FormSave";
import { FormEmpty } from "../FormEmpty";
import type { Link } from "@/app/_stores/link.store";
import { FormDataSchema } from "./schema";
import { UpdateLinkAction } from "../../server/UpdateLinkAction";

type Input = z.infer<typeof FormDataSchema>;

export type FormValues = {
  links: Input["links"];
};

type Props = {
  userId: string | undefined;
};

export const FormLinks = ({ userId }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const links = useStore(useLinkStore, (state) => state.links);
  const { setLinks } = useLinkStore();
  const { linksPreview, setLinkPreviews } = usePreviewStore();
  const { status, error } = useFetchLink({ userId });
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormDataSchema),
    reValidateMode: "onChange",
    defaultValues: useMemo(() => {
      return { links: links };
    }, [links]),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      UpdateLinkAction({
        formData: data,
      });
    });

    setLinks(data.links);

    !isPending && setSubmitted(true);
  });

  const values = useWatch({
    control,
    name: "links",
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setLinkPreviews(value.links as Link[]);
    });

    return () => subscription.unsubscribe();
  }, [values]);

  useEffect(() => {
    if (status === "success") {
      reset({ links: links });
    }
  }, [links]);

  return (
    <form className="h-full flex flex-col justify-between" onSubmit={onSubmit}>
      <LinksGenerator control={control} register={register} errors={errors}>
        {!linksPreview?.length && status === "success" && <FormEmpty />}
      </LinksGenerator>

      <FormSave links={links} linksPreview={linksPreview} values={values} />
    </form>
  );
};
