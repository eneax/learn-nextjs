import Head from 'next/head';
import { Button, Icon, Flex } from '@chakra-ui/react';
import { MdGroupWork } from 'react-icons/md';

import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Agora</title>
      </Head>

      <Icon as={MdGroupWork} name="logo" color="black" w={10} h={10} />

      {auth.user ? (
        <Button as="a" href="/dashboard" mt={4}>
          View Dashboard
        </Button>
      ) : (
        <Button size="sm" mt={4} onClick={() => auth.signinWithGitHub()}>
          Sign in with GitHub
        </Button>
      )}
    </Flex>
  );
};

export default Home;
