import Link from "next/link";

import { db } from "@/db";

export default async function HomePage() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      href={`/snippets/${snippet.id}`}
      className="flex justify-between items-center p-2 border rounded"
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));

  return (
    <main>
      <div className="flex justify-between items-center my-2">
        <h1 className="text-lg font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border rounded p-2">
          New
        </Link>
      </div>

      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </main>
  );
}
