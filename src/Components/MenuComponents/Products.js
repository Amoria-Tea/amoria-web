import React from "react";
import Product from "./Product";

const Products = ({ currProducts }) => {
  return (
    <ul class="grid grid-cols-1 gap-20 md:grid-cols-2 p-10">
      {currProducts.map((product) => {
        return <Product product={product} />;
      })}
    </ul>
  );
};

export default Products;
