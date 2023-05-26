import React from "react";
import Product from "./Product";

const Products = ({ productsData }) => {
  return (
    <ul class="grid grid-cols-1 gap-20 md:grid-cols-2 p-10">
      {productsData.map((productData) => {
        return <Product productData={productData} />;
      })}
    </ul>
  );
};

export default Products;
