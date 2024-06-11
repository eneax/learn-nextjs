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

export async function createSnippet(formData: FormData) {
  // Check user input and make sure it's valid
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

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
