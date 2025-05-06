import { useContext } from "react";
import { shoppingCartProductsContext } from "./ShoppingCartProductsState";
import { Link } from "react-router-dom";
import React from "react";
export default function AddToCartElement({ product }) {
  const shoppingCart = useContext(shoppingCartProductsContext);

  return (
    <>
      <button
        onClick={() => {
          if (
            !shoppingCart.shoppingCartState.some(
              (shop) => shop.name != product.name
            )
          );
          shoppingCart.handleAddToShoppingCart(product);
        }}
        className={`flex items-center gap-[8px] rounded-[3px] !pl-[8px] !pr-[5px] duration-500 ${
          shoppingCart.shoppingCartState.some(
            (shop) => shop.name == product.name
          ) == true
            ? `!bg-[#002737] text-[#00b2ff] hover:bg-[#194d63]`
            : `bg-[#eeeeeed4] hover:bg-[#eeeeee96] text-[#063447]`
        }`}
      >
        <i
          className={
            shoppingCart.shoppingCartState.some(
              (shop) => shop.name == product.name
            ) == true
              ? `fa-solid fa-cart-plus`
              : `fa-solid fa-cart-shopping`
          }
        ></i>
        {shoppingCart.shoppingCartState.some(
          (shop) => shop.name == product.name
        ) == true ? (
          <Link to="/shopping-cart">
            <p className="font-semibold">Go To Cart</p>
          </Link>
        ) : (
          <p className="font-semibold">Add To Cart</p>
        )}
      </button>
    </>
  );
}
