import { z } from "zod";

export const schema = z.object({
  first: z.string().min(1, {
    message: "First name is required.",
  }),
  file:
    typeof File !== "undefined"
      ? z.instanceof(FileList, {
          message: "Please enter a file",
        })
      : z.unknown(),
});
