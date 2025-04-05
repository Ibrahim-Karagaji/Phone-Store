import "./App.css";
import Header from "./Header";
import Content from "./Content";
import useProducts from "./useProducts";
import { createContext } from "react";
import Footer from "./Footer";

export const products = createContext();

export default function App() {
  return (
    <products.Provider value={useProducts()}>
      <div id="App" className="h-screen min-w-[640px]">
        <Header />
        <Content />
        <Footer />
      </div>
    </products.Provider>
  );
}
