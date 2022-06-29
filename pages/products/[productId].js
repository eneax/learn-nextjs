import * as React from "react";
import fs from "fs/promises";
import path from "path";

const ProductDetailsPage = ({ product }) => {
  // when `fallback: true` is used:
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </React.Fragment>
  );
};

export default ProductDetailsPage;

const getData = async () => {
  const productsFilePath = path.join(process.cwd(), "data", "products.json");
  const productsJsonData = await fs.readFile(productsFilePath);
  const data = JSON.parse(productsJsonData);

  return data;
};

export const getStaticProps = async (context) => {
  const { productId } = context.params;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

// Let Next.js know which instance of this page should be pre-generated.
export const getStaticPaths = async () => {
  const data = await getData();

  const productIds = data.products.map((product) => product.id);
  const params = productIds.map((productId) => ({ params: { productId } }));

  return {
    paths: params,
    fallback: true, // remaining product pages are generated just in time
  };
};
