"use server";
import { z } from "zod";
import { ResetPasswordDataSchema } from "../components/AuthForm/schema";
import Auth_service from "@/app/_services/auth.service";
import { redirect } from "next/navigation";
import { URL_CONSTANT } from "@/app/_constants/url.constant";
import { MESSAGE_CONSTANT } from "@/app/_constants/message.constant";

type Input = z.infer<typeof ResetPasswordDataSchema>;

type Props = {
  formData: Input;
};

export const ResetPasswordAction = async ({ formData }: Props) => {
  const url = process.env.NEXT_PUBLIC_SITE_URL!;
  const requestUrl = new URL(url);
  const result = ResetPasswordDataSchema.safeParse(formData);

  if (result.success) {
    const { error } = await Auth_service.updatePassword({
      password: result.data.password,
    });

    if (error) {
      return redirect(
        requestUrl.origin + URL_CONSTANT.RECOVERY + MESSAGE_CONSTANT.RESET_ERROR
      );
    }

    await Auth_service.signout();

    redirect(
      requestUrl.origin + URL_CONSTANT.SIGN_IN + MESSAGE_CONSTANT.RESET_SUCCESS
    );
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};
