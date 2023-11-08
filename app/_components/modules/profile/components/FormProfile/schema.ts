import { z } from "zod";

const ACCEPTED_FILE_TYPES = ["image/png"];

export const FormDataSchema = z.object({
  picture: z.any(),
  // .refine(
  //   (files) => {
  //     if (files) {
  //       return files.length === 1;
  //     } else {
  //       return false;
  //     }
  //   },
  //   { message: "Please select a file." }
  // )
  // .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
  //   message: "Please select a valid file type.",
  // }),
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
