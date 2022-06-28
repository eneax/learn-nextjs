import fs from "fs/promises";
import path from "path";

const PreRenderedPage = ({ products }) => {
  return (
    <div>
      <h1>getStaticProps</h1>
      <p>
        (SSG) - this page is automatically generated as static HTML + JSON
        (using getStaticProps)
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
  const productsFilePath = path.join(process.cwd(), "data", "products.json");
  const productsJsonData = await fs.readFile(productsFilePath);
  const data = JSON.parse(productsJsonData);

  return {
    props: {
      products: data.products,
    },
  };
};

export default PreRenderedPage;
