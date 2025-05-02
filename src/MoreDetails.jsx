import { favoritesProductsContext } from "./FavoritesProductsState";
import { shoppingCartProductsContext } from "./ShoppingCartProductsState";
import { productDetailsContext } from "./ProductDetailsState";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function MoreDetails() {
  const { productDetails } = useContext(productDetailsContext);
  const favorites = useContext(favoritesProductsContext);
  const shoppingCart = useContext(shoppingCartProductsContext);

  return Object.keys(productDetails).length == 0 ? (
    <div className="flex justify-center !m-[10px]">
      <img src="images-folder\Waiting.png" />
    </div>
  ) : (
    <div className="moreDetailsCard flex justify-center gap-10 text-[#eeeeeed1] !mt-[20px] !mb-[20px] !ml-[10px] !mr-[10px]">
      <div className="grid gap-5 justify-items-center">
        <img className="h-[280px] w-[280px]" src={productDetails.images[0]} />
        <div className="flex items-center gap-2.5">
          {productDetails.images.map((m, index) => (
            <img src={m} key={index} className="w-20 h-20" />
          ))}
        </div>
      </div>
      <div className="grid gap-3 h-[fit-content]">
        <h1 className="font-normal text-[25px] border-b-1 border-[#eeeeeed1]">
          {productDetails.name}
        </h1>
        <div className="grid leading-[1.6]">
          <h1 className="font-bold text-[20px]">
            Brand:<span className="font-normal"> {productDetails.brand}</span>
          </h1>
          <h1 className="font-bold text-[20px]">
            Category:
            <span className="font-normal"> {productDetails.category}</span>
          </h1>
          <h1 className="font-bold text-[20px]">
            storage:
            <span className="font-normal"> {productDetails.storage}</span>
          </h1>
          <h1 className="font-bold text-[20px]">
            ram:
            <span className="font-normal"> {productDetails.ram}</span>
          </h1>
          <h1 className="font-bold text-[20px]">
            price:
            <span className="font-normal"> {productDetails.price}</span>
          </h1>
          <h1 className="font-bold text-[20px]">
            production:
            <span className="font-normal"> {productDetails.production}</span>
          </h1>
        </div>
        <p className="!p-[3px] bg-[#eeeeeed1] text-[#063447] rounded-[4px] w-[350px] font-medium">
          {productDetails.description}
        </p>
        <div className="flex justify-between border-t-1 border-[#eeeeeed1] !pt-[10px]">
          <button
            onClick={() => {
              if (
                !shoppingCart.shoppingCartState.some(
                  (shop) => shop.name != productDetails.name
                )
              );
              shoppingCart.handleAddToShoppingCart(productDetails);
            }}
            className={`flex items-center justify-center gap-[8px] rounded-[3px] !pl-[8px] !pr-[5px] duration-500 ${
              shoppingCart.shoppingCartState.some(
                (shop) => shop.name == productDetails.name
              ) == true
                ? `!bg-[#002737] text-[#00b2ff] hover:bg-[#194d63]`
                : `bg-[#eeeeeed4] hover:bg-[#eeeeee96] text-[#063447]`
            }`}
          >
            <i
              className={
                shoppingCart.shoppingCartState.some(
                  (shop) => shop.name == productDetails.name
                ) == true
                  ? `fa-solid fa-cart-plus`
                  : `fa-solid fa-cart-shopping`
              }
            ></i>
            {shoppingCart.shoppingCartState.some(
              (shop) => shop.name == productDetails.name
            ) == true ? (
              <Link to="/shopping-cart">
                <p className="font-semibold">Go To Cart</p>
              </Link>
            ) : (
              <p className="font-semibold">Add To Cart</p>
            )}
          </button>
          <img
            className={`w-[30px] rounded-[3px] !p-[3px] rounded-[5px] ${
              favorites.favoritesState.some(
                (fav) => fav.name == productDetails.name
              ) == true
                ? `bg-[red]`
                : `bg-[transparent]`
            }`}
            onClick={() => {
              if (
                favorites.favoritesState.some(
                  (fav) => fav.name == productDetails.name
                ) == true
              )
                favorites.deleteFromFavorites(productDetails);
              else favorites.handleAddToFavorites(productDetails);
            }}
            src="images-folder\wishlist-dark.svg"
          />
        </div>
      </div>
    </div>
  );
}
