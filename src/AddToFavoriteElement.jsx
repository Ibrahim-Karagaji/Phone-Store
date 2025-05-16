import { useContext } from "react";
import { favoritesProductsContext } from "./FavoritesProductsState";

export default function AddToFavoriteElement({ product }) {
  const favorites = useContext(favoritesProductsContext);

  return (
    <>
      <img
        className={`w-[25px] rounded-[3px] !p-[3px] ${
          favorites.favoritesState.some((fav) => fav.name == product.name) ==
          true
            ? `bg-[red]`
            : `bg-[transparent]`
        }`}
        onClick={() => {
          if (
            favorites.favoritesState.some((fav) => fav.name == product.name) ==
            true
          ) {
            favorites.deleteFromFavorites(product);
          } else {
            favorites.handleAddToFavorites(product);
          }
        }}
        src="images-folder\wishlist-dark.svg"
      />
    </>
  );
}
