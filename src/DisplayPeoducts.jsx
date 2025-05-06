import { shoppingCartProductsContext } from "./ShoppingCartProductsState";
import AddToFavoriteElement from "./AddToFavoriteElement";
import { productDetailsContext } from "./ProductDetailsState";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function DisplayPeoducts(products) {
  const shoppingCart = useContext(shoppingCartProductsContext);
  const productDetails = useContext(productDetailsContext);
  const newProducts = products.map((p, index) => {
    return (
      <div
        key={index}
        className="DisplayPeoducts text-[15px] text-[#eeeeeed4] rounded-[5px] shadow-[0px_0px_2px_0px_black] grid  w-[fit-content] duration-300 hover:-translate-y-1"
      >
        <Link
          onClick={() => {
            productDetails.addProduct(p);
          }}
          to="/More-Details"
        >
          <div className="more-details w-[auto] h-[auto] ">
            <img
              className="h-full rounded-[5px] max-w-[230px] max-h-[350px]"
              src={p.images[0]}
            />
          </div>
        </Link>
        <div className="grid gap-[5px] !p-[5px]">
          <h1 className="rounded-[5px] font-bold">{p.name}</h1>
          <p className="text-[#063447] bg-[#eeeeeed4] w-[220px] !p-[3px] rounded-[5px] font-semibold text-[15px]">
            {p.description}
          </p>
          <p className="rounded-[5px] font-bold">Price: {p.price + "$"}</p>
        </div>
        <div className="flex justify-between !p-[5px] items-center">
          <AddToFavoriteElement product={p} />
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
