import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Selected Client: {id}</h1>
      <p>A list of project for {id}</p>
    </div>
  );
};

export default ClientProjectsPage;
