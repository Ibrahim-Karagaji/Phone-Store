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

  function handleAddRamState(filter) {
    setFiltersState(() => {
      return { ...prev, ram: filter };
    });
  }

  function handleAddMinPriceState(filter) {
    setFiltersState(() => {
      return { ...prev, minPrice: filter };
    });
  }

  function handleAddMaxPriceState(filter) {
    setFiltersState(() => {
      return { ...prev, maxPrice: filter };
    });
  }

  const state = { filtersState: filtersState };

  return (
    <filtersStateContext.Provider value={state}>
      {children}
    </filtersStateContext.Provider>
  );
}
