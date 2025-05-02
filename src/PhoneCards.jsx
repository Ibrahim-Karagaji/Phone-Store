import DisplayPeoducts from "./DisplayPeoducts";
import IsLoadingPhoneCard from "./IsLoadingPhoneCard";
import { products } from "./Layout";
import { useContext } from "react";
import { filtersStateContext } from "./FiltersState";
import { Link } from "react-router-dom";

export default function PhoneCards() {
  const pro = useContext(products);
  const filters = useContext(filtersStateContext);
  return pro.isLoading == false ? (
    <div className="grid gap-3 ">
      <div className="grid gap-5 !p-[5px] shadow-[0px_0px_2px_0px_black] overflow-auto">
        <Link to="/List-Phones">
          <div className="!p-[5px] bg-[#eeeeeed1] text-[#063447] rounded-[5px] w-[fit-content] font-bold">
            <h1>Best Selaing</h1>
          </div>
        </Link>
        <div className="flex gap-3 ">
          {DisplayPeoducts(
            pro.products
              .filter((p) => p.price <= 900 && p.price >= 400)
              .slice(0, 6)
          )}
        </div>
      </div>
      <div className="grid gap-5 !p-[5px] shadow-[0px_0px_2px_0px_black] overflow-auto">
        <Link
          onClick={() => filters.handleAddCategoryState("Flagship")}
          to="/List-Phones"
        >
          <div className="!p-[5px] bg-[#eeeeeed1] text-[#063447] rounded-[5px] w-[fit-content] font-bold">
            <h1>Flagship</h1>
          </div>
        </Link>
        <div className="flex gap-3 ">
          {DisplayPeoducts(
            pro.products.filter((p) => p.category == "Flagship").slice(0, 6)
          )}
        </div>
      </div>
      <div className="grid gap-5 !p-[5px] shadow-[0px_0px_2px_0px_black] overflow-auto">
        <Link
          onClick={() => filters.handleAddCategoryState("Mid-range")}
          to="/List-Phones"
        >
          <div className="!p-[5px] bg-[#eeeeeed1] text-[#063447] rounded-[5px] w-[fit-content] font-bold">
            <h1>Mid-range</h1>
          </div>
        </Link>
        <div className="flex gap-3 ">
          {DisplayPeoducts(
            pro.products.filter((p) => p.category == "Mid-range").slice(0, 6)
          )}
        </div>
      </div>
      <div className="grid gap-5 !p-[5px] shadow-[0px_0px_2px_0px_black] overflow-auto">
        <Link
          onClick={() => filters.handleAddCategoryState("Budget")}
          to="/List-Phones"
        >
          <div className="!p-[5px] bg-[#eeeeeed1] text-[#063447] rounded-[5px] w-[fit-content] font-bold">
            <h1>Budget</h1>
          </div>
        </Link>
        <div className="flex gap-3 ">
          {DisplayPeoducts(
            pro.products.filter((p) => p.category == "Budget").slice(0, 6)
          )}
        </div>
      </div>
    </div>
  ) : pro.error == false ? (
    <div className="grid gap-5">
      <div className="grid gap-3 !p-[10px] shadow-[0px_0px_5px_0px_black] overflow-auto">
        <div className="w-[150px] h-[35px] bg-[#031c27] rounded-[5px]"></div>
        <div className="flex gap-5 ">
          {[1, 2, 3, 4, 5, 6].map((number, index) => (
            <IsLoadingPhoneCard key={index} />
          ))}
        </div>
      </div>
      <div className="grid gap-5 !p-[10px] shadow-[0px_0px_5px_0px_black] overflow-auto">
        <div className="w-[150px] h-[35px] bg-[#031c27] rounded-[5px]"></div>
        <div className="flex gap-5">
          {[1, 2, 3, 4, 5, 6].map((number, index) => (
            <IsLoadingPhoneCard key={index} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="grid justify-center gap-10 content-center w-[100%]">
      <i className="fa-solid fa-face-sad-tear text-[200px]"></i>
      <h1 className="text-[30px]">404 Not Found</h1>
    </div>
  );
}
