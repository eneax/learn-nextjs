"use server";

import { z } from "zod";
import { auth } from "@/auth";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Only lowercase letters and hyphens without spaces are allowed.",
    }),
  description: z.string().min(10).max(280),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[]; // for form-level errors like user not authenticated
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const name = formData.get("name");
  const description = formData.get("description");
  const result = createTopicSchema.safeParse({ name, description });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be authenticated to create a topic."],
      },
    };
  }

  return {
    errors: {},
  };

  // TODO: revalidate the homepage
}
