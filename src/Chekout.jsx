import { shoppingCartProductsContext } from "./ShoppingCartProductsState";

export default function Chekout() {
  const shoppingCart = useContext(shoppingCartProductsContext);

  return <div className="h-screen">Chekout</div>;
}
