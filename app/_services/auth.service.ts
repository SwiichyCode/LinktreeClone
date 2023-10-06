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

type RecoveryType = {
  email: string;
};

type UpdatePasswordType = {
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

const resetPassword = async ({ email }: RecoveryType) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/auth/callback?next=/auth/reset-password",
  });
  return { error };
};

const updatePassword = async ({ password }: UpdatePasswordType) => {
  const { error } = await supabase.auth.updateUser({
    password: password,
  });
  return { error };
};

const Auth_service = {
  signup,
  signin,
  signout,
  resetPassword,
  updatePassword,
};

export default Auth_service;
