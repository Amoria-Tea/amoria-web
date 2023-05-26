import React from "react";

const CategoryBox = ({ category, setPage }) => {
  return (
    <li className="bg-[#F8E8D4] rounded-md h-60 w-96 justify-self-center">
      <button
        className="flex items-center h-full w-full p-4 gap-10"
        onClick={() => setPage(category.page)}
      >
        <img src={category.image} className="object-contain h-full w-[50%]" />
        <div className="text-[#C76C3F]">{category.name}</div>
      </button>
    </li>
  );
};

export default CategoryBox;
