import Head from 'next/head';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

const Home = () => {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fast Feedback</h1>

        <p>Current user: {auth.user ? auth.user.email : 'None'}</p>
        {auth.user ? (
          <button type="button" onClick={() => auth.signout()}>
            Sign Out
          </button>
        ) : (
          <button type="button" onClick={() => auth.signinWithGitHub()}>
            Sign In with GitHub
          </button>
        )}
      </main>
    </div>
  );
};

export default Home;
