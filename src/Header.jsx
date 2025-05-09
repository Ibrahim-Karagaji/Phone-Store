import { SearchStateContext } from "./SearchState";
import { favoritesProductsContext } from "./FavoritesProductsState";
import SearchCards from "./SearchCards";
import { shoppingCartProductsContext } from "./ShoppingCartProductsState";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const search = useContext(SearchStateContext);
  const favorites = useContext(favoritesProductsContext);
  const shoppingCart = useContext(shoppingCartProductsContext);

  return (
    <div className="flex items-center gap-[10px] text-[#eeeeeed1] !p-[3px]">
      <img
        src="images-folder\site-Logo.png"
        className="shadow-[0px_0px_2px_0px_black] basis-[5%] w-[100px] h-[65px] rounded-[5px]"
      />
      <div className="relative shadow-[0px_0px_2px_0px_black] text-[18px] h-[100%] basis-[95%] gap-[10px] flex items-center rounded-[5px]">
        <i className="fa-solid fa-magnifying-glass text-[#063447] bg-[#eeeeeed1] !p-[20px] rounded-[3px]"></i>
        <input
          onInput={(e) => {
            search.handleSetSearch(e.target.value);
          }}
          placeholder="Search for a Phone"
          className="focus:outline-none w-[93%]"
        />
        <SearchCards />
        <div className="choices flex items-center gap-[5px] !m-[0px_10px]">
          <Link to="/">
            <i className="fa-solid fa-house home !p-[3px] text-[16px] hover:text-[#063447] hover:bg-[#eeeeeed1] rounded-[4px] duration-300 hover:-translate-y-1 relative"></i>
          </Link>
          <Link to="/shopping-cart">
            <i className="fa-solid shopping fa-cart-shopping !p-[3px] text-[16px] hover:text-[#063447] hover:bg-[#eeeeeed1] rounded-[4px] duration-300 hover:-translate-y-1 relative"></i>
            <span
              className={`shoppingCartCounter w-[10px] h-[10px] absolute ${
                shoppingCart.shoppingCartState.length != 0
                  ? "bg-red-600"
                  : "bg-[transparent]"
              } text-[#063447] right-[60px] top-[12px] z-40 text-[20px] rounded-[50%] duration-150`}
            ></span>
          </Link>
          <Link to="/favorites">
            <i className="fa-solid heart fa-heart !p-[3px] text-[16px] hover:text-[#063447] hover:bg-[#eeeeeed1] rounded-[4px] duration-300 hover:-translate-y-1 relative"></i>
            <span
              className={`favoritesCounter w-[10px] h-[10px] absolute ${
                favorites.favoritesState.length != 0
                  ? "bg-red-600"
                  : "bg-[transparent]"
              } text-[#063447] right-[34px] top-[12px] z-40 text-[20px] rounded-[50%] duration-150`}
            ></span>
          </Link>
          {window.localStorage.getItem("user") == null ? (
            <Link to="/Login">
              <i className="fa-solid log-in fa-right-to-bracket !p-[3px] text-[16px] hover:text-[#063447] hover:bg-[#eeeeeed1] rounded-[4px] duration-300 hover:-translate-y-1 relative"></i>
            </Link>
          ) : (
            <i
              onClick={() => {
                window.localStorage.clear();
                location.reload();
              }}
              className="fa-solid fa-arrow-right-from-bracket log-out !p-[3px] text-[16px] hover:text-[#063447] hover:bg-[#eeeeeed1] rounded-[4px] duration-300 hover:-translate-y-1 relative"
            ></i>
          )}
          <i className="option fa-solid fa-bars left-[0px] absolute opacity-0 !p-[3px] hover:text-[#063447] hover:bg-[#eeeeeed1] rounded-[4px] duration-300 hover:-translate-y-1"></i>
          <div className="list-option z-[-52] absolute opacity-0 grid bg-[#eeeeeed1] text-[#063447] !p-[2px] text-[2px] top-[-30px] right-[15px] rounded-[4px] duration-300">
            <Link to="/">
              <p className="!p-[4px] border-b-[2px] duration-300 hover:-translate-y-1">
                Home
              </p>
            </Link>
            <Link to="/shopping-cart">
              <p className=" !p-[4px] border-b-[2px] duration-300 hover:-translate-y-1">
                Cart shopping
              </p>
            </Link>
            <Link to="/favorites">
              <p className="!p-[4px] border-b-[2px] duration-300 hover:-translate-y-1">
                Favorite
              </p>
            </Link>
            {window.localStorage.getItem("user") == null ? (
              <Link to="/Login">
                <p className="!p-[4px] border-b-[2px]  duration-300 hover:-translate-y-1">
                  Log In
                </p>
              </Link>
            ) : (
              <p
                onClick={() => {
                  window.localStorage.clear();
                  location.reload();
                }}
                className="!p-[4px] border-b-[2px]  duration-300 hover:-translate-y-1"
              >
                Log out
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
