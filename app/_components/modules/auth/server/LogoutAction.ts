"use server";
import Auth_service from "@/app/_services/auth.service";
import { redirect } from "next/navigation";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

export const LogoutAction = async () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL!;
  const requestUrl = new URL(url);

  const { error } = await Auth_service.signout();

  if (error) {
    redirect(
      `${requestUrl.origin + URL_CONSTANT.SIGN_IN}?error=Unable to sign out`
    );
  }

  return redirect(`${requestUrl.origin + URL_CONSTANT.SIGN_IN}`);
};
