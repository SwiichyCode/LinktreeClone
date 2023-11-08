"use server";

import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";
import { FormDataSchema } from "../components/FormProfile/schema";
import Link_service from "@/app/_services/link.server.service";

type Input = z.infer<typeof FormDataSchema>;

type Props = {
  formData: Input;
};

export const UpdateProfileAction = async ({ formData }: Props) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("user_id");
  const result = FormDataSchema.safeParse(formData);
  const picture = formData.picture.get("picture");
  const id = uuidv4();

  if (result.success) {
    const { data, error: profileError } = await Link_service.updateProfile({
      id: cookie?.value,
      profile: {
        pictureFromStorage: `https://tonewesplnewecmwaypr.supabase.co/storage/v1/object/public/avatars/public/${id}`,
        username: result.data.username,
        firstname: result.data.firstname,
        lastname: result.data.lastname,
        email: result.data.email,
      },
    });
    const { error } = await Link_service.uploadProfilePictureFromStorage(
      id,
      picture
    );

    if (error) {
      console.log(error);
    }

    if (error?.message === "The resource already exists") {
      const { error } = await Link_service.updateProfilePictureFromStorage(
        cookie?.value!,
        picture
      );

      if (error) {
        console.log(error);
      }
    }
  }

  return result;
};
