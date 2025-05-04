import { useState, useEffect } from "react";
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
import WelcomeMassage from "./WelcomeMassage";

export default function Layout() {
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    setTimeout(() => setWaiting(true), 3000);
  }, []);

  return (
    <products.Provider value={useProducts()}>
      <ProductDetailsState>
        <FiltersState>
          <ShoppingCartProductsState>
            <FavoritesProductsState>
              <div id="App" className="h-screen">
                {waiting == false ? (
                  <WelcomeMassage />
                ) : (
                  <>
                    <Header />
                    <Outlet />
                    <Footer />
                  </>
                )}
              </div>
            </FavoritesProductsState>
          </ShoppingCartProductsState>
        </FiltersState>
      </ProductDetailsState>
    </products.Provider>
  );
}
