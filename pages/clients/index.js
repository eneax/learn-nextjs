import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "apple", name: "Apple" },
    { id: "google", name: "Google" },
    { id: "microsoft", name: "Microsoft" },
  ];

  return (
    <div>
      <h1>Clients Page</h1>

      <ul>
        {clients.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/clients/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
