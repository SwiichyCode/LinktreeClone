import { z } from "zod";

export const FormDataSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username must contain at least 1 character." }),
  firstname: z
    .string()
    .min(1, { message: "Firstname must contain at least 1 character." }),
  lastname: z
    .string()
    .min(1, { message: "Lastname must contain at least 1 character." }),
  email: z.string().email({ message: "Email is not valid." }),
});
