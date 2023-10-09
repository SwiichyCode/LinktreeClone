"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import { FormDataSchema } from "../components/FormLinks/schema";
import Link_service from "@/app/_services/link.server.service";

type Input = z.infer<typeof FormDataSchema>;

type Props = {
  formData: Input;
};

export const UpdateLinkAction = async ({ formData }: Props) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("user_id");
  const result = FormDataSchema.safeParse(formData);

  if (result.success) {
    const { data, error } = await Link_service.updateLinks({
      id: cookie?.value,
      links: result.data.links,
    });

    if (error) {
      console.log(error);
    }
  }
};
