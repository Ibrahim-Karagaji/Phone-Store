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
import ShoppingCartProductsState from "./ShoppingCartProductsState";
import UserProfile from "./UserProfile";

export default function App() {
  return (
    <ShoppingCartProductsState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/shopping-Cart" element={<ShoppingCart />} />
            <Route path="/List-Phones" element={<ListPhones />} />
            <Route path="/More-Details" element={<ProductMoreDetails />} />
            <Route path="/User-Profile" element={<UserProfile />} />
          </Route>
          <Route path="/Chekout" element={<Chekout />} />
          <Route path="/Login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProductsState>
  );
}
