import fs from "fs/promises";
import path from "path";

const PreRenderedPage = ({ products }) => {
  return (
    <div>
      <h1>getStaticProps</h1>
      <p>
        (SSG) - this page is automatically generated as static HTML + JSON
        (using getStaticProps) and uses revalidate (ISR: 10 Seconds)
      </p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  console.log("(Re-)Generating page...");
  const productsFilePath = path.join(process.cwd(), "data", "products.json");
  const productsJsonData = await fs.readFile(productsFilePath);
  const data = JSON.parse(productsJsonData);

  // Redirect user to `/no-data` page if no data is found
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  // Return 404 page if no products are found
  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};

export default PreRenderedPage;
