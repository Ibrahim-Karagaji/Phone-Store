import React from "react";
import { useEffect, useRef, useState, useContext } from "react";
import { favoritesProductsContext } from "./FavoritesProductsState";
import { shoppingCartProductsContext } from "./ShoppingCartProductsState";

export default function WelcomeMassage() {
  const welcomeMassage = useRef(null);
  const favorites = useContext(favoritesProductsContext);
  const shoppingCart = useContext(shoppingCartProductsContext);

  const favoritesWindowLocalStorage = window.localStorage.getItem("favorites");
  if (favoritesWindowLocalStorage != null) {
    const convert = JSON.parse(favoritesWindowLocalStorage);
    const fav = convert.map((f) => favorites.handleAddToFavorites(f));
  }

  const shoppingCartWindowLocalStorage =
    window.localStorage.getItem("shoppingCart");
  if (shoppingCartWindowLocalStorage != null) {
    const convert = JSON.parse(shoppingCartWindowLocalStorage);
    const fav = convert.map((shopping) =>
      shoppingCart.handleAddToShoppingCart(shopping)
    );
  }

  useEffect(() => {
    welcomeMassage.current.style.opacity = "100%";
    setTimeout(() => {
      welcomeMassage.current.style.opacity = "0%";
    }, 2500);
  }, []);

  return (
    <div
      ref={welcomeMassage}
      className="shadow opacity-0 duration-300 grid gap-3 !ml-[auto] !mr-[auto] !mt-[55px] max-w-[500px] justify-items-center !p-[5px]"
    >
      <img
        src="images-folder/site-Logo.png"
        className="w-[400px] h-[300px] rounded-2xl"
      />
      <h1 className="text-[#eeeeeed1] flex gap-1 font-bold">
        WELCOME TO <p className="text-[#0a6288]">MOBLIE PHONE</p>
      </h1>
      <p className="text-[#eeeeeed1] font-bold text-center">
        Your go-to destination for the latest smartphones, accessories, and
        expert reviews. We're passionate about keeping you connected with the
        best mobile technology at unbeatable prices. Shop smart, stay connected.
      </p>
    </div>
  );
}
