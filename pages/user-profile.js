const UserProfile = ({ user }) => {
  return <h1>{user}</h1>;
};

export default UserProfile;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  console.log("Server Side Code");

  return {
    props: {
      user: "Enea",
    },
  };
};
