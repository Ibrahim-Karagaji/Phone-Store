import DisplayPeoducts from "./DisplayPeoducts";
import IsLoadingPhoneCard from "./IsLoadingPhoneCard";
import { products } from "./App";
import { useContext } from "react";
export default function PhoneCards() {
  const pro = useContext(products);
  console.log(pro.products)
  return (pro.isLoading == false ?
    <div className="grid gap-5">

    </div>
    :
    pro.error == false ?
      <div className="grid gap-5">
        <div className="grid gap-5 !p-[10px] shadow-[0px_0px_5px_0px_black] overflow-auto">
          <div className="w-[150px] h-[35px] bg-[#031c27] rounded-[5px]"></div>
          <div className="flex gap-10 ">
            {[1, 2, 3, 4, 5, 6].map((number, index) => <IsLoadingPhoneCard key={index} />)}
          </div>
        </div>
        <div className="grid gap-5 !p-[10px] shadow-[0px_0px_5px_0px_black] overflow-auto">
          <div className="w-[150px] h-[35px] bg-[#031c27] rounded-[5px]"></div>
          <div className="flex gap-10 ">
            {[1, 2, 3, 4, 5, 6].map((number, index) => <IsLoadingPhoneCard key={index} />)}
          </div>
        </div>
      </div> :
      console.log("Erorr")
  );
}