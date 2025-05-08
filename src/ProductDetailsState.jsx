import { useState, createContext } from "react";
export const productDetailsContext = createContext();
export default function ProductDetailsState({ children }) {
  const [productDetails, setProductDetails] = useState({});

  const addProduct = (details) => {
    window.localStorage.setItem("productDetails", JSON.stringify(details));
    setProductDetails(details);
  };

  const state = {
    productDetails: productDetails,
    addProduct,
  };

  return (
    <productDetailsContext.Provider value={state}>
      {children}
    </productDetailsContext.Provider>
  );
}
