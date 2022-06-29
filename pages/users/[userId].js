const UserDetailsPage = ({ userId }) => {
  return <h1>{userId}</h1>;
};

export default UserDetailsPage;

// No pre-generation, so no need to define getStaticPaths in advance.
export const getServerSideProps = async (context) => {
  const userId = context.params.userId;

  return {
    props: {
      userId: `User ID: ${userId}`,
    },
  };
};
