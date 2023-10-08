"use client";

import { z } from "zod";
import Link from "next/link";
import { useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthAction } from "../../server/AuthAction";
import { FormDataSchema, SigninDataSchema } from "./schema";
import { TextField } from "@/app/_components/ui/TextField";
import { Button } from "@/app/_components/ui/Button";
import { FormMessage } from "../FormMessage";
import { AuthFormLink } from "./AuthFormLink";
import { AuthPasswordInfo } from "./AuthPasswordInfo";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

type Input = z.infer<typeof FormDataSchema>;

type Props = {
  state: "signin" | "signup";
};

export const AuthForm = ({ state }: Props) => {
  const [isPending, startTransition] = useTransition();
  const isSignup = state === "signup";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(
      state === "signup" ? FormDataSchema : SigninDataSchema
    ),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      AuthAction({
        formData: data,
        state,
      });
    });
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <TextField
        name="email"
        placeholder="e.g. alex@email.com"
        labelText="Email address"
        iconUrl="/icon-email.svg"
        register={register}
        error={errors.email?.message}
      />

      <div className="flex flex-col gap-2">
        <TextField
          name="password"
          type="password"
          placeholder={
            isSignup ? "At least .8 characters" : "Enter your password"
          }
          labelText="Password"
          iconUrl="/icon-password.svg"
          register={register}
          error={errors.password?.message}
        />
        {!isSignup && (
          <Link
            href={URL_CONSTANT.RECOVERY}
            className="w-fit text-sm font-medium text-purple"
          >
            Forgot password ?
          </Link>
        )}
      </div>

      {isSignup && (
        <TextField
          name="confirm"
          type="password"
          placeholder={
            isSignup ? "At least .8 characters" : "Enter your password"
          }
          labelText="Confirm password"
          iconUrl="/icon-password.svg"
          register={register}
          error={errors.confirm?.message}
        />
      )}

      {isSignup && <AuthPasswordInfo />}
      <FormMessage />

      <Button type="submit" disabled={isPending}>
        {isSignup ? "Create new account" : "Login"}
      </Button>

      <AuthFormLink state={state} />
    </form>
  );
};
