import { filtersStateContext } from "./FiltersState";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function SideBar() {
  const filters = useContext(filtersStateContext);
  return (
    <div className="SideBar min-w-[155px] basis-[12%] shadow-[0px_0px_5px_0px_black] rounded-[5px] duration-300 ">
      <i className="fa-solid fa-circle-user !p-[3px] hover:text-[#063447] hover:bg-[#eeeeeed1] duration-300 rounded-[4px] !flex w-[fit-content] !ml-[auto] text-[30px]"></i>
      <div className="content grid gap-[3px] text-[#eeeeeed1] !m-[10px_0px_0px]">
        <Link to="/List-Phones">
          <div className="flex justify-end gap-[8px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300">
            <p>Best Selaing</p>
            <i className="fa-solid fa-fire"></i>
          </div>
        </Link>
        <Link to="/List-Phones">
          <div className="flex justify-end gap-[8px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300">
            <p>Phone List</p>
            <i className="fa-solid fa-list"></i>
          </div>
        </Link>
        <Link
          onClick={() => filters.handleAddCategoryState("Flagship")}
          to="/List-Phones"
        >
          <div className="flex justify-end gap-[8px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300">
            <p>Flagship</p>
            <i className="fa-solid fa-rocket"></i>
          </div>
        </Link>
        <Link to="/List-Phones">
          <div
            onClick={() => filters.handleAddCategoryState("Mid-range")}
            className="flex justify-end gap-[8px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300"
          >
            <p>Mid-range</p>
            <i className="fa-solid fa-star"></i>
          </div>
        </Link>
        <Link to="/List-Phones">
          <div
            onClick={() => filters.handleAddCategoryState("Budget")}
            className="flex justify-end gap-[8px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300"
          >
            <p>Budget</p>
            <i className="fa-solid fa-lines-leaning"></i>
          </div>
        </Link>
        <div className="flex justify-end gap-[8px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300">
          <p>Settings</p>
          <i className="fa-solid fa-gear"></i>
        </div>
      </div>
    </div>
  );
}
