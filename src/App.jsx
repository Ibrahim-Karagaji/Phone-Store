import "./App.css";
import Header from "./Header";
import Content from "./Content";
import useProducts from "./useProducts";
import { createContext } from "react";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./LogLn";

export const products = createContext();

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <products.Provider value={useProducts()}>
            <div id="App" className="h-screen min-w-[640px]">
              <Header />
              <Content />
              <Footer />
            </div>
          </products.Provider>} />
        <Route path="/Login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}
