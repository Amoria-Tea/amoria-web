import { createContext, useState } from "react";
import productsData from "../data/products";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products] = useState(productsData);
  const [currProducts, setCurrProducts] = useState([]);

  const contextValue = { products, currProducts, setCurrProducts };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
