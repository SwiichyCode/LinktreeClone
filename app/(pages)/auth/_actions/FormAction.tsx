"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { FormDataSchema, SigninDataSchema } from "../_schema";

type Input = z.infer<typeof FormDataSchema>;

type Props = {
  formData: Input;
  state: "signin" | "signup";
};

export const FormAction = async ({ formData, state }: Props) => {
  const url = process.env.NEXT_PUBLIC_SITE_URL!;

  const requestUrl = new URL(url);
  const supabase = createServerActionClient({ cookies });

  const result =
    state === "signup"
      ? FormDataSchema.safeParse(formData)
      : SigninDataSchema.safeParse(formData);

  if (result.success) {
    const { error } =
      state === "signup"
        ? await supabase.auth.signUp({
            email: result.data.email,
            password: result.data.password,
            options: {
              emailRedirectTo: `${requestUrl.origin}/auth/callback`,
            },
          })
        : await supabase.auth.signInWithPassword({
            email: result.data.email,
            password: result.data.password,
          });

    if (error) {
      redirect(
        `${requestUrl.origin}/auth/sign-in?error=Unable to authenticate user`
      );
    }

    return state === "signup"
      ? redirect(
          `${requestUrl.origin}/auth/sign-in?message=Check your emails to continue the login process`
        )
      : redirect(requestUrl.origin);
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};
