import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();

  // If the user is not logged in, redirect to the sign in page
  if (req.nextUrl.pathname === "/") {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      return res;
    }

    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/auth/sign-in";
    redirectUrl.searchParams.set("redirectUrl", req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl.toString(), { status: 302 });
  }

  return res;
}
