import { useState, useEffect, createContext } from "react";
import "./App.css";
import Header from "./Header";
import useProducts from "./useProducts";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import FavoritesProductsState from "./FavoritesProductsState";
import ShoppingCartProductsState from "./ShoppingCartProductsState";
import FiltersState from "./FiltersState";
import ProductDetailsState from "./ProductDetailsState";
export const products = createContext();
import WelcomeMassage from "./WelcomeMassage";
import SearchState from "./SearchState";

export default function Layout() {
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    setTimeout(() => setWaiting(false), 3000);
  }, []);

  return (
    <products.Provider value={useProducts()}>
      <SearchState>
        <ProductDetailsState>
          <FiltersState>
            <ShoppingCartProductsState>
              <FavoritesProductsState>
                <div id="App" className="h-screen">
                  {waiting == true ? (
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
      </SearchState>
    </products.Provider>
  );
}
