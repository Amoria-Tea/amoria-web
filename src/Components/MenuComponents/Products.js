import React from "react";
import Product from "./Product";

const Products = ({ currProducts }) => {
  return (
    <ul class="grid grid-cols-1 md:gap-24 gap-14 lg:grid-cols-2 p-10">
      {currProducts.map((product) => {
        return <Product product={product} key={product.name} />;
      })}
    </ul>
  );
};

export default Products;
