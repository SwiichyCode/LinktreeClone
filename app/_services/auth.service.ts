import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

const supabase = createServerActionClient({ cookies });

type SignupType = {
  email: string;
  password: string;
  requestUrl: string;
};

type SigninType = {
  email: string;
  password: string;
};

const signup = async ({ email, password, requestUrl }: SignupType) => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: requestUrl,
    },
  });

  return { error };
};

const signin = async ({ email, password }: SigninType) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { error };
};

const signout = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

const Auth_service = {
  signup,
  signin,
  signout,
};

export default Auth_service;
