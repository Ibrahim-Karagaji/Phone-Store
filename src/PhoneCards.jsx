import DisplayPeoducts from "./DisplayPeoducts";
import IsLoadingPhoneCard from "./IsLoadingPhoneCard";
import { products } from "./App";
import { useContext } from "react";
export default function PhoneCards() {
  const pro = useContext(products);

  function getRandomBrand() {
    const brand = ['OnePlus', 'Samsung', 'Apple', 'Honor', 'Realme', 'Oppo', 'Vivo', 'Xiaomi', 'Tecno'];

    const randomBrand = brand[Math.floor(Math.random() * brand.length)];

    return randomBrand;
  }

  return (pro.isLoading == false ?
    <div className="grid gap-5">
      <div className="grid gap-5 !p-[10px] shadow-[0px_0px_5px_0px_black] overflow-auto">
        <div className="!p-[5px] bg-[#eeeeeed1] text-[#063447] rounded-[5px] w-[fit-content] font-bold">
          <h1>Best Selaing</h1>
        </div>
        <div className="flex gap-10 ">
          {DisplayPeoducts(pro.products.filter((p) => p.price <= 900 && p.price >= 400).slice(0, 6))}
        </div>
      </div>
      <div className="grid gap-5 !p-[10px] shadow-[0px_0px_5px_0px_black] overflow-auto">
        <div className="!p-[5px] bg-[#eeeeeed1] text-[#063447] rounded-[5px] w-[fit-content] font-bold">
          <h1>Flagship</h1>
        </div>
        <div className="flex gap-10 ">
          {DisplayPeoducts(pro.products.filter((p) => p.category == "Flagship").slice(0, 6))}
        </div>
      </div>
      <div className="grid gap-5 !p-[10px] shadow-[0px_0px_5px_0px_black] overflow-auto">
        <div className="!p-[5px] bg-[#eeeeeed1] text-[#063447] rounded-[5px] w-[fit-content] font-bold">
          <h1>Flagship Killer</h1>
        </div>
        <div className="flex gap-10 ">
          {DisplayPeoducts(pro.products.filter((p) => p.price <= 900 && p.price >= 600).slice(0, 6))}
        </div>
      </div>
      <div className="grid gap-5 !p-[10px] shadow-[0px_0px_5px_0px_black] overflow-auto">
        <div className="!p-[5px] bg-[#eeeeeed1] text-[#063447] rounded-[5px] w-[fit-content] font-bold">
          <h1>Medium</h1>
        </div>
        <div className="flex gap-10 ">
          {DisplayPeoducts(pro.products.filter((p) => p.category == "Mid-range").slice(0, 6))}
        </div>
      </div>
      <div className="grid gap-5 !p-[10px] shadow-[0px_0px_5px_0px_black] overflow-auto">
        <div className="!p-[5px] bg-[#eeeeeed1] text-[#063447] rounded-[5px] w-[fit-content] font-bold">
          <h1>Economy</h1>
        </div>
        <div className="flex gap-10 ">
          {DisplayPeoducts(pro.products.filter((p) => p.category == "Budget").slice(0, 6))}
        </div>
      </div>
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
      <div className="grid justify-center gap-10 content-center w-[100%]">
        <i class="fa-solid fa-face-sad-tear text-[200px]"></i>
        <h1 className="text-[30px]">404 Not Found</h1>
      </div>
  );
}