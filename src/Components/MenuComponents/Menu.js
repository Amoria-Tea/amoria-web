import React, { useContext, useState } from "react";
import Categories from "./Categories";
import Products from "./Products";
import { ProductsContext } from "context/ProductsProvider";

function Menu() {
  const [page, setPage] = useState(1);
  const { products, currProducts, setCurrProducts } =
    useContext(ProductsContext);

  return (
    <div className="border-t border-[#3E3E3E] py-10">
      <ul className="flex justify-evenly">
        <li>
          <button onClick={() => setPage(1)}>Categories</button>
        </li>
        {products.map((category) => {
          return (
            <li key={category.name}>
              <button
                onClick={() => {
                  setPage(2);
                  setCurrProducts(category.items);
                }}
              >
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
        {page === 1 && <Categories products={products} setPage={setPage} />}
        {page === 2 && <Products currProducts={currProducts} />}
      </div>
    </div>
  );
}

export default Menu;
