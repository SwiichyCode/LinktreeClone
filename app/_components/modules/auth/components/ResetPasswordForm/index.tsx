"use client";
import { useTransition } from "react";
import { Button } from "@/app/_components/ui/Button";
import { TextField } from "@/app/_components/ui/TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordDataSchema } from "../AuthForm/schema";
import { ResetPasswordAction } from "../../server/ResetPasswordAction";

type Input = {
  password: string;
  confirm: string;
};

export const ResetPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(ResetPasswordDataSchema),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      ResetPasswordAction({
        formData: data,
      });
    });
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <TextField
        name="password"
        type="password"
        placeholder="At least .8 characters"
        labelText="Password"
        iconUrl="/icon-password.svg"
        register={register}
        error={errors.password?.message}
      />

      <TextField
        name="confirm"
        type="password"
        placeholder="At least .8 characters"
        labelText="Confirm password"
        iconUrl="/icon-password.svg"
        register={register}
        error={errors.confirm?.message}
      />

      <Button type="submit" disabled={isPending}>
        Reset your password
      </Button>
    </form>
  );
};
