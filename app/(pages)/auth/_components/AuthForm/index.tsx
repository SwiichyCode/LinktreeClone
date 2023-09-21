"use client";

import { z } from "zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAction } from "../../_actions/FormAction";
import { FormDataSchema, SigninDataSchema } from "../../_schema";
import { TextField } from "@/app/_components/ui/TextField";
import { Button } from "@/app/_components/ui/Button";
import { AuthMessage } from "./AuthMessage";
import { AuthFormLink } from "./AuthFormLink";
import { AuthPasswordInfo } from "./AuthPasswordInfo";

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
    setFocus,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(
      state === "signup" ? FormDataSchema : SigninDataSchema
    ),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      FormAction({
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
        setFocus={setFocus}
        error={errors.email?.message}
      />
      <TextField
        name="password"
        type="password"
        placeholder={
          isSignup ? "At least .8 characters" : "Enter your password"
        }
        labelText="Password"
        iconUrl="/icon-password.svg"
        register={register}
        setFocus={setFocus}
        error={errors.password?.message}
      />

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
          setFocus={setFocus}
          error={errors.confirm?.message}
        />
      )}

      {isSignup && <AuthPasswordInfo />}
      <AuthMessage />

      <Button
        type="submit"
        disabled={isPending}
        text={isSignup ? "Create new account" : "Login"}
      />

      <AuthFormLink state={state} />
    </form>
  );
};
