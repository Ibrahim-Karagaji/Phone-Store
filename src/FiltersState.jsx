import { useState, createContext } from "react";

export const filtersStateContext = createContext();
export default function FiltersState({ children }) {
  const [filtersState, setFiltersState] = useState([]);

  const state = { filtersState: filtersState };

  return (
    <filtersStateContext.Provider value={state}>
      {children}
    </filtersStateContext.Provider>
  );
}
