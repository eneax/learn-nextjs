import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  const { id, clientProjectId } = router.query;

  return (
    <div>
      <h1>Selected Client: {id}</h1>
      <p>Selected Project: {clientProjectId}</p>
    </div>
  );
};

export default SelectedClientProjectPage;
