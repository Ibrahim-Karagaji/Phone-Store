import "./App.css";
import Header from "./Header";
import Content from "./Content";
import useProducts from "./useProducts";
import { createContext } from "react";

export const products = createContext();

export default function App() {
  return (
    <products.Provider value={useProducts()}>
      <div id="App" className="h-screen">
        <Header />
        <Content />
      </div>
    </products.Provider>
  );
}
