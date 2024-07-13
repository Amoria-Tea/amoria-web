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
    <h2 className="text-center text-lg italic mb-4">
      Note: Menu subject to change, please contact us for the most up-to-date menu.
    </h2>
    <ul className="flex flex-wrap justify-center items-center text-center md:text-lg text-xs px-2 gap-2 md:gap-4 lg:gap-6">  <li>
          <button
            onClick={() => setPage(1)}
            className={`${page === 1 ? "font-bold" : ""}`}
          >
            All
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
