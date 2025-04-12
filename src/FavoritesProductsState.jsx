import { createContext, useState } from "react";

export const favoritesProductsContext = createContext();

export default function FavoritesProductsState({ children }) {
  const [favoritesState, setFavoritesState] = useState([]);
  function handleAddToFavorites(product) {
    if (favoritesState.length == 0)
      setFavoritesState((prev) => {
        return [...prev, product];
      });
    else {
      const cheek = favoritesState.find((p) => p.name == product.name);
      if (!cheek)
        setFavoritesState((prev) => {
          return [...prev, product];
        });
    }
  }
  function deleteFromFavorites() {}
  const state = {
    favoritesState: favoritesState,
    handleAddToFavorites,
    deleteFromFavorites,
  };
  return (
    <favoritesProductsContext.Provider value={state}>
      {children}
    </favoritesProductsContext.Provider>
  );
}
