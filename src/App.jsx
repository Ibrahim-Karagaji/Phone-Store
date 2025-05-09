import "./App.css";
import Content from "./Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./LogLn";
import Favorites from "./Favorites";
import Layout from "./Layout";
import ShoppingCart from "./ShoppingCart";
import ListPhones from "./ListPhones";
import Chekout from "./Chekout";
import ProductMoreDetails from "./ProductMoreDetails";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/List-Phones" element={<ListPhones />} />
          <Route path="/More-Details" element={<ProductMoreDetails />} />
        </Route>
        <Route path="/Chekout" element={<Chekout />} />
        <Route path="/Login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}
