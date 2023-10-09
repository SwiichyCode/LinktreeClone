import { z } from "zod";

const LinkSchema = z.object({
  id: z.string().min(1, { message: "ID must contain at least 1 character." }),
  platform: z
    .string()
    .min(1, { message: "Platform must contain at least 1 character." }),
  url: z.string().url({ message: "URL is not valid." }),
});

export const FormDataSchema = z.object({
  links: z.array(LinkSchema),
});
