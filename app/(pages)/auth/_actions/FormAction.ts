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
  const isSignup = state === "signup";

  const result = isSignup
    ? FormDataSchema.safeParse(formData)
    : SigninDataSchema.safeParse(formData);

  if (result.success) {
    const { error } = isSignup
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

    return isSignup
      ? redirect(
          `${requestUrl.origin}/auth/sign-in?success=Check your emails to continue the login process`
        )
      : redirect(requestUrl.origin);
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};