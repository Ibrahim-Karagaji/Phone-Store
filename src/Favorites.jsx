import { Link } from "react-router-dom";
import { favoritesProductsContext } from "./FavoritesProductsState";
import { useContext } from "react";

export default function Favorites() {
  return (
    <div className="text-[#eeeeeed1] !p-[3px] min-w-[640px] min-h-[100vh]">
      <Link to="/">
        <i className="fa-solid fa-arrow-left text-[25px] hover:text-[#b5b5b5d1]"></i>
      </Link>
      <div></div>
    </div>
  );
}
