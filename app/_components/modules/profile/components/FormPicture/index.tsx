import { FormCard } from "@/app/_components/ui/Form/FormCard";
import { ImageField } from "@/app/_components/ui/ImageField";
import type { FormValues } from "../FormProfile";
import type { UseFormRegister } from "react-hook-form";
import type { Profile } from "@/app/_stores/types";
import { usePicture } from "@/app/_hooks/usePicture";

type Props = {
  register: UseFormRegister<FormValues>;
  profile: Profile | undefined;
  errors: any;
};

export const FormPicture = ({ register, profile, errors }: Props) => {
  const { pictureURL } = usePicture({ picture: profile?.picture });

  return (
    <FormCard>
      <ImageField
        labelText="Profile picture"
        name="picture"
        pictureURL={pictureURL}
        register={register}
        error={errors.picture?.message}
      />
    </FormCard>
  );
};
