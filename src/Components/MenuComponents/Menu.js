import React, { useContext, useState } from "react";
import Categories from "./Categories";
import Products from "./Products";
import products from "data/products";

function Menu() {
  const [page, setPage] = useState(1);
  const [currName, setCurrName] = useState("");
  const [currProducts, setCurrProducts] = useState([]);

  return (
    <div className="menu-border py-10 my-8">
      <ul className="grid grid-cols-5 text-center md:text-lg text-xs px-2">
        <li>
          <button
            onClick={() => setPage(1)}
            className={`${page === 1 ? "font-bold" : ""}`}
          >
            Categories
          </button>
        </li>
        {products.map((category) => {
          return (
            <li key={category.name}>
              <button
                onClick={() => {
                  setPage(2);
                  setCurrProducts(category.items);
                  setCurrName(category.name);
                }}
                className={
                  currName === category.name && page === 2 ? "font-bold" : ""
                }
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
