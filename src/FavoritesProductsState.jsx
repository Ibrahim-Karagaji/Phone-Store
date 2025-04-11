import { createContext, useState } from "react";

export const favoritesProductsContext = createContext();

export default function FavoritesProductsState({ children }) {
  const [favoritesState, setFavoritesState] = useState([]);
  function addToFavorites() {}
  function deleteFromFavorites() {}
  const state = {
    favoritesState: favoritesState,
    addToFavorites,
    deleteFromFavorites,
  };
  return (
    <favoritesProductsContext.Provider value={state}>
      {children}
    </favoritesProductsContext.Provider>
  );
}
