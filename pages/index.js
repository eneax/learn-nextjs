import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/pre-rendered">getStaticProps</Link>
        </li>
        <li>
          <Link href="/user-profile">getServerSideProps</Link>
        </li>
        <li>
          <Link href="/sales/latest-sales">Client-Side Data Fetching</Link>
        </li>
        <li>
          <Link href="/api-route">API Route</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
