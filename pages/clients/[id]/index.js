import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const loadProjectHandler = () => {
    // load data first
    // navigate programmatically
    router.push("/clients/apple/iphone");
  };

  return (
    <div>
      <h1>Selected Client: {id}</h1>
      <p>A list of project for {id}</p>

      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;

/* 
Navigate programmatically passing an object to 'Link'

router.push({
  pathname: '/clients/[id]/[clientProjectId]'
  query: {
    id: 'apple',
    clientProjectId: 'iphone'
  }
});

*/
