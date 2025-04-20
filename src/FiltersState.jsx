import { useState, createContext } from "react";

export const filtersStateContext = createContext();
export default function FiltersState({ children }) {
  const [filtersState, setFiltersState] = useState({
    brand: "",
    storage: "",
    ram: "",
    minPrice: 0,
    maxPrice: 0,
  });

  function handleAddBrandState(filter) {
    setFiltersState(() => {
      return { ...prev, brand: filter };
    });
  }

  function handleAddStorageState(filter) {
    setFiltersState(() => {
      return { ...prev, storage: filter };
    });
  }

  const state = { filtersState: filtersState };

  return (
    <filtersStateContext.Provider value={state}>
      {children}
    </filtersStateContext.Provider>
  );
}
