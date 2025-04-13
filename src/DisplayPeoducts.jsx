import { favoritesProductsContext } from "./FavoritesProductsState";
import { shoppingCartProductsContext } from "./ShoppingCartProductsState";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function DisplayPeoducts(products) {
  const favorites = useContext(favoritesProductsContext);
  const shoppingCart = useContext(shoppingCartProductsContext);
  const newProducts = products.map((p, index) => {
    return (
      <div
        key={index}
        className="DisplayPeoducts text-[15px] text-[#eeeeeed4] rounded-[5px] shadow-[0px_0px_10px_0px_black] grid gap-[3px] w-[fit-content] duration-500 hover:-translate-y-1"
      >
        <div className="peoductsImg w-[240px] h-[170px] ">
          <img
            className="h-full rounded-[5px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUHB559_lpuhRggsf2SfA6nuCvsM_7zj8lg&s"
          />
        </div>
        <div className="grid gap-[5px] !p-[5px]">
          <h1 className="rounded-[5px] font-bold">{p.name}</h1>
          <p className="text-[#063447] bg-[#eeeeeed4] w-[230px] !p-[3px] rounded-[5px] font-semibold text-[15px]">
            {p.description}
          </p>
          <p className="rounded-[5px] font-bold">Price: {p.price + "$"}</p>
        </div>
        <div className="flex justify-between !p-[5px] items-center">
          <img
            className={`w-[30px] rounded-[3px] !p-[3px] rounded-[5px] ${
              favorites.favoritesState.some((fav) => fav.name == p.name) == true
                ? `bg-[red]`
                : `bg-[transparent]`
            }`}
            onClick={() => {
              if (
                favorites.favoritesState.some((fav) => fav.name == p.name) ==
                true
              )
                favorites.deleteFromFavorites(p);
              else favorites.handleAddToFavorites(p);
            }}
            src="images-folder\wishlist-dark.svg"
          />
          <button
            onClick={() => {
              if (
                !shoppingCart.shoppingCartState.some(
                  (shop) => shop.name != p.name
                )
              );
              shoppingCart.handleAddToShoppingCart(p);
            }}
            className={`flex items-center gap-[8px] rounded-[3px] !pl-[8px] !pr-[5px] duration-500 ${
              shoppingCart.shoppingCartState.some(
                (shop) => shop.name == p.name
              ) == true
                ? `!bg-[#002737] text-[#00b2ff] hover:bg-[#194d63]`
                : `bg-[#eeeeeed4] hover:bg-[#eeeeee96] text-[#063447]`
            }`}
          >
            <i
              className={
                shoppingCart.shoppingCartState.some(
                  (shop) => shop.name == p.name
                ) == true
                  ? `fa-solid fa-cart-plus`
                  : `fa-solid fa-cart-shopping`
              }
            ></i>
            {shoppingCart.shoppingCartState.some(
              (shop) => shop.name == p.name
            ) == true ? (
              <Link to="/shopping-cart">
                <p className="font-semibold">Go To Cart</p>
              </Link>
            ) : (
              <p className="font-semibold">Add To Cart</p>
            )}
          </button>
        </div>
      </div>
    );
  });
  return newProducts;
}
