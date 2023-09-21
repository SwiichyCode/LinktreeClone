"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

export const LogoutAction = async () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL!;

  const requestUrl = new URL(url);
  const supabase = createServerActionClient({
    cookies,
  });
  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect(`${requestUrl.origin}/auth/sign-in?error=Unable to sign out`);
  }

  return redirect(`${requestUrl.origin}/auth/sign-in`);
};
