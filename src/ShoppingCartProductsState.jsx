import { useState, createContext } from "react";
export const shoppingCartProductsContext = createContext();

export default function ShoppingCartProductsState({ children }) {
  const [shoppingCartState, setShoppingCartState] = useState([]);
  let shoppingLocalStorage = window.localStorage.getItem("shoppingCart");

  function handleAddToShoppingCart(shoppingCart) {
    if (window.localStorage.getItem("shoppingCart") == null) {
      let shopping = [];
      shopping.push(shoppingCart);
      window.localStorage.setItem("shoppingCart", JSON.stringify(shopping));
    } else {
      let convert = JSON.parse(shoppingLocalStorage);
      const check = convert.some((p) => p.name == shoppingCart.name);
      if (!check) {
        convert.push(shoppingCart);
        window.localStorage.setItem("shoppingCart", JSON.stringify(convert));
      }
    }

    if (shoppingCartState.length == 0)
      setShoppingCartState((prev) => {
        return [...prev, shoppingCart];
      });
    else {
      const cheekIfProudctAdded = shoppingCartState.some(
        (sc) => sc.name == shoppingCart.name
      );
      if (!cheekIfProudctAdded)
        setShoppingCartState((prev) => {
          return [...prev, shoppingCart];
        });
    }
  }

  const handleDeleteFromShoppingCart = (shoppingCart) => {
    let convert = JSON.parse(shoppingLocalStorage);
    const filterSoppingCartProducts = convert.filter(
      (f) => f.name != shoppingCart.name
    );
    window.localStorage.setItem(
      "shoppingCart",
      JSON.stringify(filterSoppingCartProducts)
    );

    const shop = shoppingCartState.filter((s) => s.name != shoppingCart.name);
    setShoppingCartState(shop);
  };

  function handleClearShoppingCart() {
    window.localStorage.removeItem("shoppingCart");
    setShoppingCartState([]);
  }

  const state = {
    shoppingCartState: shoppingCartState,
    handleAddToShoppingCart,
    handleDeleteFromShoppingCart,
    handleClearShoppingCart,
  };

  return (
    <shoppingCartProductsContext.Provider value={state}>
      {children}
    </shoppingCartProductsContext.Provider>
  );
}
