"use client";
import { z } from "zod";
import { useState, useMemo, useTransition, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchData } from "@/app/_hooks/useFetchData";
import { Profile, useDataStore } from "@/app/_stores/data.store";
import { usePreviewStore } from "@/app/_stores/preview.store";
import { useStore } from "@/app/_stores/useStore";
import { UpdateProfileAction } from "../../server/UpdateProfileAction";
import { FormDataSchema } from "./schema";
import { FormWrapper } from "@/app/_components/ui/Form/FormWrapper";
import { FormCard } from "@/app/_components/ui/Form/FormCard";
import { TextField } from "@/app/_components/ui/TextField";
import { FormSave } from "@/app/_components/ui/Form/FormSave";
import { Notification } from "@/app/_components/ui/Notification";
import { FormInformations } from "../FormInformations";

export type FormValues = z.infer<typeof FormDataSchema>;

type Props = {
  userId: string | undefined;
};

export const FormProfile = ({ userId }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const profile = useStore(useDataStore, (state) => state.profile);
  const { setProfile } = useDataStore();
  const { profilePreview, setProfilePreview } = usePreviewStore();
  const { status, error } = useFetchData({ userId });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormDataSchema),
    reValidateMode: "onChange",
    defaultValues: useMemo(() => {
      return profile;
    }, [profile]),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      UpdateProfileAction({
        formData: data,
      });
    });

    setProfile(data);
    setSubmitted(true);

    !isPending && setTimeout(() => setSubmitted(false), 3000);
  });

  const values = watch();

  useEffect(() => {
    const subscription = watch((value) => {
      const profile = {
        username: value.username,
        firstname: value.firstname,
        lastname: value.lastname,
        email: value.email,
      };
      setProfilePreview(profile as Profile);
    });

    return () => subscription.unsubscribe();
  }, [values]);

  useEffect(() => {
    if (status === "success") {
      reset(profile);
    }
  }, [profile]);

  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormInformations register={register} profile={profile} errors={errors} />

      <FormSave state="profile" profile={profile} profileValues={values} />

      <Notification
        iconUrl="/icon-changes-saved.svg"
        message="Your changes have been successfully saved!"
        submitted={submitted}
      />
    </FormWrapper>
  );
};
