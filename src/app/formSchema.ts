import { z } from "zod";

export const schema = z.object({
  first: z.string().min(1, {
    message: "First name is required.",
  }),
  file: z.instanceof(File, {
    message: "Please enter a file",
  }),
});
