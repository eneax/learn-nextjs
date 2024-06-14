"use server";

import type { Post } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const title = formData.get("title");
  const content = formData.get("content");
  const result = createPostSchema.safeParse({ title, content });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be authenticated to create a post."],
      },
    };
  }

  const topic = await db.topic.findFirst({
    where: { slug },
  });
  if (!topic) {
    return {
      errors: {
        _form: ["Topic not found."],
      },
    };
  }

  return {
    errors: {},
  };

  // TODO: revalidate the topic show page
}
