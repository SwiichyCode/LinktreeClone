import { z } from "zod";

export const FormDataSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8),
    confirm: z.string().min(8).optional(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export const SigninDataSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string(),
});

export const RecoveryDataSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const ResetPasswordDataSchema = z
  .object({
    password: z.string().min(8),
    confirm: z.string().min(8).optional(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });
