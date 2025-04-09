import "./App.css";
import Content from "./Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./LogLn";
import Favorite from "./Favorite";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="/favorite" element={<Favorite />} />
          {/* <Route path="/shopping-cart" element={<ShoppingCart products />} /> */}
        </Route>
        <Route path="/Login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}
