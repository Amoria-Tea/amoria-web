import React, { useState } from "react";
import Categories from "./Categories";
import Products from "./Products";
import products from "../../data/products";

function Menu() {
  const [page, setPage] = useState(1);
  const [productsData, setProductsData] = useState([]);

  return (
    <div className="border-t border-[#3E3E3E] py-10">
      <ul class="flex justify-evenly">
        <li>
          <button onClick={() => setPage(1)}>Categories</button>
        </li>
        <li>
          <button
            onClick={() => {
              setPage(2);
              setProductsData(products.milkTea.items);
            }}
          >
            Milk Tea
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setPage(2);
              setProductsData(products.milkTea.items);
            }}
          >
            Fruit Tea
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setPage(2);
              setProductsData(products.milkTea.items);
            }}
          >
            Specialty
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setPage(2);
              setProductsData(products.milkTea.items);
            }}
          >
            Toppings
          </button>
        </li>
      </ul>
      <div>
        {page === 1 && <Categories setPage={setPage} />}
        {page === 2 && <Products productsData={productsData} />}
      </div>
    </div>
  );
}

export default Menu;
