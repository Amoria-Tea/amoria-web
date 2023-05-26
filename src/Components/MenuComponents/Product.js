import React from "react";

const Product = ({ product }) => {
  return (
    <li className="bg-[#F8E8D4] rounded-md h-60 w-96 justify-self-center">
      <div className="flex items-center h-full w-full p-4 gap-10">
        <img
          src={product.image}
          className="object-contain h-full w-[50%]"
          alt={product.name}
        />
        <div className="text-[#C76C3F] flex flex-col gap-4">
          <div className="text-xl font-bold">{product.name}</div>
          <div>{product.description}</div>
          <div>{product.special}</div>
        </div>
      </div>
    </li>
  );
};

export default Product;
