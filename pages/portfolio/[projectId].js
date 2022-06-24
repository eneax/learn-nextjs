import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  const projectIdQuery = router.query.projectId;

  return (
    <div>
      <h1>{projectIdQuery} Page</h1>
    </div>
  );
};

export default PortfolioProjectPage;
