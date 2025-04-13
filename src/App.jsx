import "./App.css";
import Content from "./Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./LogLn";
import Favorites from "./Favorites";
import Layout from "./Layout";
import ShoppingCart from "./ShoppingCart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/shopping-cart" element={<ShoppingCart products />} />
        </Route>
        <Route path="/Login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}
