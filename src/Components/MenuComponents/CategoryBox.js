import React from "react";

const CategoryBox = ({ category, setPage, setCurrProducts, setCurrName }) => {
  return (
    <li className="bg-[#F8E8D4] rounded-lg h-60 md:w-96 w-72 justify-self-center md:p-0 p-2">
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
        <div className="text-[#C76C3F] md:text-xl text-lg font-bold">
          {category.name}
        </div>
      </button>
    </li>
  );
};

export default CategoryBox;
