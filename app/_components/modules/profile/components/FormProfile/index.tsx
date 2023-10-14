"use client";
import { z } from "zod";
import { useState, useMemo, useTransition, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchData } from "@/app/_hooks/useFetchData";
import { useDataStore } from "@/app/_stores/data.store";
import { usePreviewStore } from "@/app/_stores/preview.store";
import { useStore } from "@/app/_stores/useStore";
import { UpdateProfileAction } from "../../server/UpdateProfileAction";
import { FormDataSchema } from "./schema";
import { FormWrapper } from "@/app/_components/ui/Form/FormWrapper";
import { FormCard } from "@/app/_components/ui/Form/FormCard";
import { TextField } from "@/app/_components/ui/TextField";
import { FormSave } from "@/app/_components/ui/Form/FormSave";
import { Notification } from "@/app/_components/ui/Notification";

type FormValues = z.infer<typeof FormDataSchema>;

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

  useEffect(() => {
    if (status === "success") {
      reset(profile);
    }
  }, [profile]);

  const values = watch();

  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormCard>
        <TextField
          labelText="Username*"
          iconUrl="/icon-links-header.svg"
          placeholder="Username*"
          name="username"
          register={register}
          defaultValue={profile?.username}
          error={errors?.username?.message}
          isProfile
        />
        <TextField
          labelText="First name*"
          iconUrl="/icon-links-header.svg"
          placeholder="First name*"
          name="firstname"
          register={register}
          defaultValue={profile?.firstname}
          error={errors?.firstname?.message}
          isProfile
        />
        <TextField
          labelText="Last name*"
          iconUrl="/icon-links-header.svg"
          placeholder="Last name*"
          name="lastname"
          register={register}
          defaultValue={profile?.lastname}
          error={errors?.lastname?.message}
          isProfile
        />
        <TextField
          labelText="Email"
          iconUrl="/icon-links-header.svg"
          placeholder="Email*"
          name="email"
          register={register}
          defaultValue={profile?.email}
          error={errors?.email?.message}
          isProfile
        />
      </FormCard>

      <FormSave state="profile" profile={profile} profileValues={values} />

      <Notification
        iconUrl="/icon-changes-saved.svg"
        text="Your changes have been successfully saved!"
        submited={submitted}
      />
    </FormWrapper>
  );
};
