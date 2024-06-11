"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // Check user input and make sure it's valid
  const title = formData.get("title");
  const code = formData.get("code");

  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title must be at least 3 characters",
    };
  }

  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "Code must be at least 10 characters",
    };
  }

  // Create a new record in the database
  await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  // Redirect home
  redirect("/");
}
