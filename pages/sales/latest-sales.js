import * as React from "react";
import useSWR from "swr";

const FIREBASE_API = "url/sale.json";

const LatestSales = (props) => {
  const [sales, setSales] = React.useState(props.sales);

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(FIREBASE_API, fetcher);

  React.useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load data!</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LatestSales;

export const getStaticProps = async () => {
  const response = await fetch(FIREBASE_API);
  const data = await response.json();
  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: transformedSales,
      revalidate: 10,
    },
  };
};
