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
        (sc) => sc.name == shoppingCart.name
      );
      if (!cheekIfProudctAdded)
        setShoppingCartState((prev) => {
          return [...prev, shoppingCart];
        });
    }
  }
  const handleDeleteFromShoppingCart = (shoppingCart) => {
    const shop = shoppingCartState.filter((s) => s.name != shoppingCart.name);
    setShoppingCartState(shop);
  };
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
