import { db } from "@/db";

export default async function HomePage() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>
      <h3>{snippet.title}</h3>
    </div>
  ));

  return (
    <div>
      <h1>Home Page</h1>
      {renderedSnippets}
    </div>
  );
}
