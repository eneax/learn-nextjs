import Link from "next/link";

const HomePage = () => {
  return (
    <div>
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
      </ul>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
