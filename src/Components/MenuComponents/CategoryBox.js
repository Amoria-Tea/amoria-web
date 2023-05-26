import React from "react";

const CategoryBox = ({ category, setPage, setCurrProducts, setCurrName }) => {
  return (
    <li className="bg-[#F8E8D4] rounded-md h-60 w-96 justify-self-center">
      <button
        className="flex items-center h-full w-full p-4 gap-10"
        onClick={() => {
          setPage(2);
          setCurrProducts(category.items);
          setCurrName(category.name);
        }}
      >
        <img
          src={category.image}
          className="object-contain h-full w-[50%]"
          alt={category.name}
        />
        <div className="text-[#C76C3F] text-xl font-bold">{category.name}</div>
      </button>
    </li>
  );
};

export default CategoryBox;
