"use client";
import { z } from "zod";
import { useState, useEffect, useMemo, useTransition } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchData } from "@/app/_hooks/useFetchData";
import { useDataStore } from "@/app/_stores/data.store";
import { usePreviewStore } from "@/app/_stores/preview.store";
import { useStore } from "@/app/_stores/useStore";
import { LinksGenerator } from "../LinksGenerator";
import { FormSave } from "../../../../ui/Form/FormSave";
import { FormEmpty } from "../../../../ui/Form/FormEmpty";
import type { Link } from "@/app/_stores/data.store";
import { FormDataSchema } from "./schema";
import { UpdateLinkAction } from "../../server/UpdateLinkAction";
import { Notification } from "@/app/_components/ui/Notification";
import { FormWrapper } from "@/app/_components/ui/Form/FormWrapper";

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
  const links = useStore(useDataStore, (state) => state.links);
  const { setLinks } = useDataStore();
  const { linksPreview, setLinkPreviews } = usePreviewStore();
  const { status, error } = useFetchData({ userId });
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
    setSubmitted(true);

    !isPending && setTimeout(() => setSubmitted(false), 3000);
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
    <FormWrapper onSubmit={onSubmit}>
      <LinksGenerator control={control} register={register} errors={errors}>
        {!linksPreview?.length && status === "success" && <FormEmpty />}
      </LinksGenerator>

      <FormSave
        state="links"
        links={links}
        linksPreview={linksPreview}
        linksValues={values}
      />

      <Notification
        iconUrl="/icon-changes-saved.svg"
        message="Your changes have been successfully saved!"
        submitted={submitted}
      />
    </FormWrapper>
  );
};
