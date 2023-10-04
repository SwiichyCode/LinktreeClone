"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

export const LogoutAction = async () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL!;

  const requestUrl = new URL(url);
  const supabase = createServerActionClient({
    cookies,
  });
  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect(
      `${requestUrl.origin + URL_CONSTANT.SIGN_IN}?error=Unable to sign out`
    );
  }

  return redirect(`${requestUrl.origin + URL_CONSTANT.SIGN_IN}`);
};
