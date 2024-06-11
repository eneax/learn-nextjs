import Link from "next/link";
import { notFound } from "next/navigation";

import { db } from "@/db";
import { deleteSnippet } from "@/actions";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  // preload the server action function
  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex justify-between items-center m-4">
        <h1 className="text-lg font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="border rounded p-2"
          >
            Edit
          </Link>

          <form action={deleteSnippetAction}>
            <button className="border rounded p-2">Delete</button>
          </form>
        </div>
      </div>

      <pre className="m-4 p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
