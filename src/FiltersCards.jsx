import { Link } from "react-router-dom";
import { favoritesProductsContext } from "./FavoritesProductsState";
import { shoppingCartProductsContext } from "./ShoppingCartProductsState";
import { productDetailsContext } from "./ProductDetailsState";
import { useContext } from "react";
export default function FiltersCards({ products, index }) {
  const favorites = useContext(favoritesProductsContext);
  const shoppingCart = useContext(shoppingCartProductsContext);
  const productDetails = useContext(productDetailsContext);

  return (
    <div
      className="filter-card DisplayPeoducts flex gap-2 text-[#eeeeeed1] shadow-[0px_0px_5px_0px_black] !p-[3px] rounded-[4px] duration-500 hover:shadow-[0px_0px_10px_0px_black] hover:-translate-y-1"
      key={index}
    >
      <Link
        onClick={() => {
          productDetails.addProduct(products);
        }}
        to="/More-Details"
      >
        <div className="more-details">
          <img
            className="min-w-[180px] max-w-[220px]  min-h-[180px] max-h-[190px] rounded-[4px]"
            src={products.images[0]}
          />
        </div>
      </Link>

      <div className="grid gap-2">
        <h1 className="text-[20px] font-normal">{products.name}</h1>
        <p className="text-[#063447] bg-[#eeeeeed1] rounded-[4px] !p-[5px] min-w-[190px] max-w-[220px]">
          {products.description}
        </p>
        <div className="flex justify-between items-center border-b-[1px] border-b-[#eeeeee40]">
          <span>Price: {products.price}$</span>
          <img
            className={`w-[30px] rounded-[3px] !p-[3px] rounded-[5px] ${
              favorites.favoritesState.some(
                (fav) => fav.name == products.name
              ) == true
                ? `bg-[red]`
                : `bg-[transparent]`
            }`}
            onClick={() => {
              if (
                favorites.favoritesState.some(
                  (fav) => fav.name == products.name
                ) == true
              )
                favorites.deleteFromFavorites(products);
              else favorites.handleAddToFavorites(products);
            }}
            src="images-folder\wishlist-dark.svg"
          />
        </div>
        <button
          onClick={() => {
            if (
              !shoppingCart.shoppingCartState.some(
                (shop) => shop.name != products.name
              )
            );
            shoppingCart.handleAddToShoppingCart(products);
          }}
          className={`flex items-center justify-center gap-[8px] rounded-[3px] !pl-[8px] !pr-[5px] duration-500 ${
            shoppingCart.shoppingCartState.some(
              (shop) => shop.name == products.name
            ) == true
              ? `!bg-[#002737] text-[#00b2ff] hover:bg-[#194d63]`
              : `bg-[#eeeeeed4] hover:bg-[#eeeeee96] text-[#063447]`
          }`}
        >
          <i
            className={
              shoppingCart.shoppingCartState.some(
                (shop) => shop.name == products.name
              ) == true
                ? `fa-solid fa-cart-plus`
                : `fa-solid fa-cart-shopping`
            }
          ></i>
          {shoppingCart.shoppingCartState.some(
            (shop) => shop.name == products.name
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
}
