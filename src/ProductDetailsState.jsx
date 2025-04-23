import { useState, createContext } from "react";
export const productDetailsContext = createContext();
export default function ProductDetailsState({ children }) {
  const [productDetails, setProductDetails] = useState({});

  const addProduct = (details) => {
    setProductDetails(details);
    console.log(details);
  };

  const state = { productDetails, setProductDetails, addProduct };

  return (
    <productDetailsContext.Provider value={state}>
      {children}
    </productDetailsContext.Provider>
  );
}
