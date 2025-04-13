import { useState, createContext } from "react";
export const shoppingCartProductsContext = createContext();
export default function ShoppingCartProductsState() {
  const [shoppingCartState, setShoppingCartState] = useState([]);
  function handleAddToShoppingCart() {}
  function handleDeleteFromShoppingCart() {}
  const state = {
    shoppingCartState: shoppingCartState,
    handleAddToShoppingCart,
    handleDeleteFromShoppingCart,
  };
  return (
    <shoppingCartProductsContext.Provider
      value={state}
    ></shoppingCartProductsContext.Provider>
  );
}
