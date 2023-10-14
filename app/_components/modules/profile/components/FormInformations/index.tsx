import { FormCard } from "@/app/_components/ui/Form/FormCard";
import { TextField } from "@/app/_components/ui/TextField";
import { FormValues } from "../FormProfile";
import type { UseFormRegister } from "react-hook-form";
import type { Profile } from "@/app/_stores/data.store";

type Props = {
  register: UseFormRegister<FormValues>;
  profile: Profile | undefined;
  errors: any;
};

export const FormInformations = ({ register, profile, errors }: Props) => {
  return (
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
  );
};
