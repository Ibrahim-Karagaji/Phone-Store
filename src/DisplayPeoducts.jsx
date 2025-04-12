import { favoritesProductsContext } from "./FavoritesProductsState";
import { useContext } from "react";
export default function DisplayPeoducts(products) {
  const newProducts = products.map((p, index) => {
    const favorites = useContext(favoritesProductsContext);
    return (
      <div
        key={index}
        className="DisplayPeoducts text-[15px] text-[#eeeeeed4] rounded-[5px] shadow-[0px_0px_10px_0px_black] grid gap-[3px] w-[fit-content] duration-500 hover:-translate-y-1"
      >
        <div className="peoductsImg w-[240px] h-[170px] ">
          <img
            className="h-full rounded-[5px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUHB559_lpuhRggsf2SfA6nuCvsM_7zj8lg&s"
          />
        </div>
        <div className="grid gap-[5px] !p-[5px]">
          <h1 className="rounded-[5px] font-bold">{p.name}</h1>
          <p className="text-[#063447] bg-[#eeeeeed4] !p-[3px] rounded-[5px] font-semibold ms:text-[17px]">
            {p.description}
          </p>
          <p className="rounded-[5px] font-bold">Price: {p.price + "$"}</p>
        </div>
        <div className="flex justify-between !p-[5px] items-center">
          <img
            className={`w-[30px] rounded-[3px] !p-[3px] rounded-[5px] ${
              favorites.favoritesState.some((fav) => fav.name == p.name) == true
                ? `bg-[red]`
                : `bg-[transparent]`
            }`}
            onClick={() => {
              favorites.handleAddToFavorites(p);
            }}
            src="images-folder\wishlist-dark.svg"
          />
          <button className="flex items-center gap-[8px] hover:bg-[#eeeeee96] bg-[#eeeeeed4] rounded-[3px] !pl-[8px] !pr-[5px] text-[#063447] duration-500 ">
            <p className="font-semibold">Add To Cart</p>
            <i className="fa-solid fa-basket-shopping"></i>
          </button>
        </div>
      </div>
    );
  });
  return newProducts;
}
