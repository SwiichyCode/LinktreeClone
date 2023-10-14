"use server";

import { z } from "zod";
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

  if (result.success) {
    const { data, error } = await Link_service.updateProfile({
      id: cookie?.value,
      profile: {
        username: result.data.username,
        firstname: result.data.firstname,
        lastname: result.data.lastname,
        email: result.data.email,
      },
    });

    if (error) {
      console.log(error);
    }
  }
};
