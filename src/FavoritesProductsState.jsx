import { createContext, useState } from "react";

export const favoritesProductsContext = createContext();

export default function FavoritesProductsState({ children }) {
  const [favoritesState, setFavoritesState] = useState([]);
  let fav = window.localStorage.getItem("favorites");

  function handleAddToFavorites(product) {
    if (window.localStorage.getItem("favorites") == null) {
      let favorites = [];
      favorites.push(product);
      window.localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      let convert = JSON.parse(fav);
      const check = convert.some((p) => p.name == product.name);
      if (!check) {
        convert.push(product);
        window.localStorage.setItem("favorites", JSON.stringify(convert));
      }
    }

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

  function deleteFromFavorites(product) {
    const fav = favoritesState.filter((p) => p.name != product.name);
    setFavoritesState(fav);
  }

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
