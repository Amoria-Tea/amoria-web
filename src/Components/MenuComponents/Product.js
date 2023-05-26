import React from "react";

const Product = ({ product }) => {
  return (
    <li className="bg-[#F8E8D4] rounded-lg h-60 md:w-96 w-72 justify-self-center">
      <div className="flex items-center h-full w-full p-4 gap-10">
        <img
          src={product.image}
          className="object-contain h-full w-[50%]"
          alt={product.name}
        />
        <div className="text-[#C76C3F] flex flex-col gap-4">
          <div className="md:text-xl text-lg font-bold">{product.name}</div>
          <div className="md:text-md text-sm flex flex-col gap-4">
            <div>{product.description}</div>
            <div>{product.special}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Product;
