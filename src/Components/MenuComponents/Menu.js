import React, { useContext, useState } from "react";
import Categories from "./Categories";
import Products from "./Products";
import products from "data/products";

function Menu() {
  const [page, setPage] = useState(1);
  const [currName, setCurrName] = useState("");
  const [currProducts, setCurrProducts] = useState([]);

  return (
    <div className="border-t border-[#3E3E3E] py-10">
      <ul className="flex justify-evenly">
        <li className={`${page === 1 ? "font-bold" : ""}`}>
          <button onClick={() => setPage(1)}>Categories</button>
        </li>
        {products.map((category) => {
          return (
            <li
              key={category.name}
              className={`${
                currName === category.name && page === 2 ? "font-bold" : ""
              }`}
            >
              <button
                onClick={() => {
                  setPage(2);
                  setCurrProducts(category.items);
                  setCurrName(category.name);
                }}
              >
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
        {page === 1 && (
          <Categories
            products={products}
            setPage={setPage}
            setCurrProducts={setCurrProducts}
            setCurrName={setCurrName}
          />
        )}
        {page === 2 && <Products currProducts={currProducts} />}
      </div>
    </div>
  );
}

export default Menu;
