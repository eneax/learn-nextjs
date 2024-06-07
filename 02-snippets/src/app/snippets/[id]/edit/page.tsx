interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);

  return (
    <div>
      <h1>Edit Snippet {id}</h1>
    </div>
  );
}
