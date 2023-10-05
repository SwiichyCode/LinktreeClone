"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import Auth_service from "@/app/_services/auth.service";
import { URL_CONSTANT } from "@/app/_constants/url.constant";
import {
  FormDataSchema,
  SigninDataSchema,
} from "../components/AuthForm/schema";

type Input = z.infer<typeof FormDataSchema>;

type Props = {
  formData: Input;
  state: "signin" | "signup";
};

export const FormAction = async ({ formData, state }: Props) => {
  const url = process.env.NEXT_PUBLIC_SITE_URL!;
  const requestUrl = new URL(url);
  const isSignup = state === "signup";

  const result = isSignup
    ? FormDataSchema.safeParse(formData)
    : SigninDataSchema.safeParse(formData);

  if (result.success) {
    const { error } = isSignup
      ? await Auth_service.signup({
          email: result.data.email,
          password: result.data.password,
          requestUrl: requestUrl.origin + URL_CONSTANT.AUTH_CALLBACK,
        })
      : await Auth_service.signin({
          email: result.data.email,
          password: result.data.password,
        });

    if (error) {
      redirect(
        `${
          requestUrl.origin + URL_CONSTANT.SIGN_IN
        }?error=Unable to authenticate user`
      );
    }

    return isSignup
      ? redirect(
          `${
            requestUrl.origin + URL_CONSTANT.SIGN_IN
          }?success=Check your emails to continue the login process`
        )
      : redirect(requestUrl.origin + URL_CONSTANT.LINKS);
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};
