import "./App.css";
import Header from "./Header";
import useProducts from "./useProducts";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import FavoritesProductsState from "./FavoritesProductsState";
import { createContext } from "react";
import ShoppingCartProductsState from "./ShoppingCartProductsState";

export const products = createContext();

export default function Layout() {
  return (
    <products.Provider value={useProducts()}>
      <ShoppingCartProductsState>
        <FavoritesProductsState>
          <div id="App" className="h-screen min-w-[600px]">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </FavoritesProductsState>
      </ShoppingCartProductsState>
    </products.Provider>
  );
}
