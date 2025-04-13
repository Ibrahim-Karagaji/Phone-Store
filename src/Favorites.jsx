import DisplayPeoducts from "./DisplayPeoducts";
import { favoritesProductsContext } from "./FavoritesProductsState";
import { useContext } from "react";

export default function Favorites() {
  const favorites = useContext(favoritesProductsContext);
  return favorites.favoritesState.length == 0 ? (
    <div
      className={`shadow-[0px_0px_5px_0px_black] grid gap-3 text-center justify-center rounded-[5px] !m-[auto] w-[fit-content] text-[23px] text-[#eeeeeed1] bg-[#002737]`}
    >
      <h1>Favorites is empty</h1>
      <img src="images-folder\empty.png" className="h-[400px] w-[480px] " />
    </div>
  ) : (
    <div className="grid gap-2 text-[#eeeeeed1] !p-[3px] min-w-[640px] justify-center overflow-auto">
      <h1 className="text-center text-[23px]">Favorites</h1>
      <div className="!p-[5px] rounded-[5px]  flex gap-10 overflow-auto w-[fit-content] shadow-[0px_0px_5px_0px_black]">
        {DisplayPeoducts(favorites.favoritesState)}
      </div>
    </div>
  );
}
