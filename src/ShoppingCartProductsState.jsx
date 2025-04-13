import { useState, createContext } from "react";
export const shoppingCartProductsContext = createContext();
export default function ShoppingCartProductsState({ children }) {
  const [shoppingCartState, setShoppingCartState] = useState([]);
  function handleAddToShoppingCart(shoppingCart) {
    if (shoppingCartState.length == 0)
      setShoppingCartState((prev) => {
        return [...prev, shoppingCart];
      });
    else {
      const cheekIfProudctAdded = shoppingCartState.some(
        (Sc) => Sc.name == shoppingCart.name
      );
      if (!cheekIfProudctAdded)
        setShoppingCartState((prev) => {
          return [...prev, shoppingCart];
        });
    }
  }
  function handleDeleteFromShoppingCart() {}
  const state = {
    shoppingCartState: shoppingCartState,
    handleAddToShoppingCart,
    handleDeleteFromShoppingCart,
  };
  return (
    <shoppingCartProductsContext.Provider value={state}>
      {children}
    </shoppingCartProductsContext.Provider>
  );
}
