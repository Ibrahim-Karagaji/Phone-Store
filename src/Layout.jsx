import "./App.css";
import Header from "./Header";
import useProducts from "./useProducts";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import FavoritesProductsState from "./FavoritesProductsState";
import { createContext } from "react";
import ShoppingCartProductsState from "./ShoppingCartProductsState";
import FiltersState from "./FiltersState";
import ProductDetailsState from "./ProductDetailsState";
export const products = createContext();

export default function Layout() {
  return (
    <products.Provider value={useProducts()}>
      <ProductDetailsState>
        <FiltersState>
          <ShoppingCartProductsState>
            <FavoritesProductsState>
              <div id="App" className="h-screen">
                <Header />
                <Outlet />
                <Footer />
              </div>
            </FavoritesProductsState>
          </ShoppingCartProductsState>
        </FiltersState>
      </ProductDetailsState>
    </products.Provider>
  );
}
