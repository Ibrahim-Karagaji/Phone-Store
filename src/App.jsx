import "./App.css";
import Header from "./Header";
import Content from "./Content";
import { createContext } from "react";
export const products = createContext();
export default function App() {
  return (
    <div id="App" className="h-screen">
      <Header />
      <Content />
    </div>
  );
}
