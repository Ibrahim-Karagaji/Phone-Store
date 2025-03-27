import { useContext } from "react";
import IsLoadingPhoneCard from "./IsLoadingPhoneCard";
import { products } from "./App";
import DisplayPeoducts from "./DisplayPeoducts";

export default function ProductsList(props) {
  const pro = useContext(products);
  return (
    <div className="grid gap-[15px] basis-[88%] rounded-[5px] shadow-[0px_0px_10px_0px_black] !p-[5px]">
      <div className="flex gap-[10px] items-center text-[#063447] bg-[#eeeeeed1] rounded-[5px] !p-[3px] w-[fit-content]">
        <h1 className="font-bold">{props.title}</h1>
        <i className="fa-solid fa-fire"></i>
      </div>
      <div className="rounded-[5px] flex justify-between gap-[40px] !pt-4 overflow-auto">
        {pro.isLoading == true ? (
          [0, 1, 2, 3, 4, 5].map((number) => (
            <IsLoadingPhoneCard key={number} />
          ))
        ) : pro.error == true ? (
          console.log("This is An error")
        ) : (
          <>
            {DisplayPeoducts(
              pro.products.filter((p) => p.category === props.filterBy)
            )}
          </>
        )}
      </div>
    </div>
  );
}
