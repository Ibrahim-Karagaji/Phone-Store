import { useState, createContext } from "react";

export const filtersStateContext = createContext();
export default function FiltersState({ children }) {
  const [filtersState, setFiltersState] = useState({
    brand: "",
    category: "",
    storage: "",
    ram: "",
    minPrice: 0,
    maxPrice: 0,
  });

  function handleAddBrandState(filter) {
    setFiltersState((prev) => {
      return { ...prev, brand: filter };
    });
  }

  function handleAddStorageState(filter) {
    setFiltersState((prev) => {
      return { ...prev, storage: filter };
    });
  }

  function handleAddCategoryState(filter) {
    setFiltersState((prev) => {
      return { ...prev, category: filter };
    });
  }

  function handleAddRamState(filter) {
    setFiltersState((prev) => {
      return { ...prev, ram: filter };
    });
  }

  function handleAddMinPriceState(filter) {
    setFiltersState((prev) => {
      return { ...prev, minPrice: filter };
    });
  }

  function handleAddMaxPriceState(filter) {
    setFiltersState((prev) => {
      return { ...prev, maxPrice: filter };
    });
  }

  const state = {
    filtersState: filtersState,
    handleAddBrandState,
    handleAddStorageState,
    handleAddRamState,
    handleAddCategoryState,
    handleAddMinPriceState,
    handleAddMaxPriceState,
  };

  return (
    <filtersStateContext.Provider value={state}>
      {children}
    </filtersStateContext.Provider>
  );
}
