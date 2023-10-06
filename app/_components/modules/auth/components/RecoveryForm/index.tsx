"use client";
import { useTransition } from "react";
import { Button } from "@/app/_components/ui/Button";
import { TextField } from "@/app/_components/ui/TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RecoveryDataSchema } from "../AuthForm/schema";
import { RecoveryAction } from "../../server/RecoveryAction";
import { FormMessage } from "../FormMessage";

type Input = {
  email: string;
};

export const RecoveryForm = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(RecoveryDataSchema),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      RecoveryAction({
        formData: data,
      });
    });
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <TextField
        labelText="Email"
        iconUrl="/icon-email.svg"
        placeholder="e.g. alex@email.com"
        name="email"
        register={register}
        error={errors.email?.message}
      />

      <FormMessage />

      <Button type="submit" disabled={isPending}>
        Send recovery email
      </Button>
    </form>
  );
};
