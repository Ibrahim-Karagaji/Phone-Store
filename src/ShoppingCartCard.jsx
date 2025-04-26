import { favoritesProductsContext } from "./FavoritesProductsState";
import { productDetailsContext } from "./ProductDetailsState";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function ShoppingCartCard({ product, index, shoppingCart }) {
  const favorites = useContext(favoritesProductsContext);
  const productDetails = useContext(productDetailsContext);
  return (
    <div
      key={index}
      className="flex gap-1 shadow-[0px_0px_2px_0px_black] !p-[5px] ShoppingCartCard DisplayPeoducts"
    >
      <Link
        onClick={() => {
          productDetails.addProduct(product);
        }}
        to="/More-Details"
      >
        <div className="more-details shoppingCartImg w-[250px] h-[230px]">
          <img
            className="w-[100%] h-[100%]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUHB559_lpuhRggsf2SfA6nuCvsM_7zj8lg&s"
          />
        </div>
      </Link>

      <div className="grid gap-1 !p-[3px] ">
        <p className="text-[19px]">{product.name}</p>
        <p className="ShoppingCartCardDescription !p-[5px] w-[350px] h-[fit-content] text-[#063447] bg-[#eeeeeed1] leading-[1.8] rounded-[3px]">
          {product.description}
        </p>
        <div className="flex items-center justify-between border-b-[1px] border-b-[#eeeeee40]">
          <p>${product.price}</p>
          <img
            className={`w-[30px] rounded-[3px] !p-[3px] ${
              favorites.favoritesState.some(
                (fav) => fav.name == product.name
              ) == true
                ? `bg-[red]`
                : `bg-[transparent]`
            }`}
            onClick={() => {
              if (
                favorites.favoritesState.some(
                  (fav) => fav.name == product.name
                ) == true
              )
                favorites.deleteFromFavorites(product);
              else favorites.handleAddToFavorites(product);
            }}
            src="images-folder\wishlist-dark.svg"
          />
        </div>
        <div className="flex items-center justify-between !mt-[15px]">
          <label for="count" className="relative countOption">
            <select
              id="count"
              name="count"
              className="!pl-[13px] !pr-[20px] !pb-[8px] text-[#eeeeeed1] bg-[#063447] border-b-[#00b2ff] border-b-[1px] "
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <div
            onClick={() => {
              shoppingCart.handleDeleteFromShoppingCart(product);
            }}
            className="!p-[4px] flex items-center gap-2 text-[red] hover:bg-[#ff000026] duration-300 "
          >
            <span>DELETE</span>
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
