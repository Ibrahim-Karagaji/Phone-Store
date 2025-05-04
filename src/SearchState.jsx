import React from "react";
import { useState, createContext, useEffect } from "react";
export const SearchStateContext = createContext();

export default function SearchState({ children }) {
  const [searchProduct, setSearchProduct] = useState({
    product: [],
    search: "",
    error: false,
  });

  useEffect(() => {
    fetch("http://localhost:7777/phones")
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("the response is not good");
      })
      .then((data) => {
        setSearchProduct((prev) => {
          return { ...prev, product: data };
        });
      })
      .catch(() => {
        setSearchProduct((prev) => {
          return { ...prev, error: true };
        });
      });
  }, []);

  const handleSetSearch = (e) =>
    setSearchProduct((prev) => {
      return { ...prev, search: e };
    });

  const state = {
    searchProduct: searchProduct,
    handleSetSearch,
  };

  return (
    <SearchStateContext.Provider value={state}>
      {children}
    </SearchStateContext.Provider>
  );
}
