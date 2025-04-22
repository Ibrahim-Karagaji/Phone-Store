import { filtersStateContext } from "./FiltersState";
import { useContext, useRef } from "react";
export default function ListPhones() {
  const filters = useContext(filtersStateContext);
  const minPriceInputRef = useRef(null);
  const maxPriceInputRef = useRef(null);

  const handleBrandState = (e) => {
    filters.handleAddBrandState(e.target.value);
  };

  const handleStorageState = (e) => {
    filters.handleAddStorageState(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    if (e.target.value <= filters.filtersState.maxPrice) {
      filters.handleAddMinPriceState(e.target.value);
      minPriceInputRef.current.style.border = "transparent";
    } else minPriceInputRef.current.style.border = "1px solid red";
  };

  const handleMaxPriceChange = (e) => {
    if (e.target.value <= 1300) {
      filters.handleAddMaxPriceState(e.target.value);
      maxPriceInputRef.current.style.border = "transparent";
    } else maxPriceInputRef.current.style.border = "1px solid red";
  };

  console.log(filters);

  return (
    <div>
      <div className="flex gap-3 !mt-[10px] !mb-[10px] w-[fit-content] !m-[auto] bg-[#002737] !p-[10px] rounded-[4px] overflow-auto min-w-[300px] max-w-[100%]">
        <label htmlFor="brandFilter">
          <select
            onClick={(e) => {
              handleBrandState(e);
            }}
            id="brandFilter"
            name="brandFilter"
            className="text-[#063447] bg-[#eeeeeed1] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
          >
            <option value="" selected>
              brand
            </option>
            <option value="OnePlus">OnePlus</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Honor">Honor</option>
            <option value="Realme">Realme</option>
            <option value="Oppo">Oppo</option>
            <option value="Vivo">Vivo</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>
        </label>
        <label htmlFor="storageFilter">
          <select
            onClick={(e) => {
              handleStorageState(e);
            }}
            id="storageFilter"
            name="brandFilter"
            className="text-[#063447] bg-[#eeeeeed1] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
          >
            <option value="" selected>
              storage
            </option>
            <option value="64GB">64GB</option>
            <option value="128GB">128GB</option>
            <option value="256GB">256GB</option>
            <option value="512GB">512GB</option>
          </select>
        </label>
        <label htmlFor="categoryFilter">
          <select
            id="categoryFilter"
            name="categoryFilter"
            className="text-[#063447] bg-[#eeeeeed1] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
          >
            <option value="">category</option>
            <option value="Best-Selaing">Best Selaing</option>
            <option value="Flagship">Flagship</option>
            <option value="Flagship-Killer">Flagship Killer</option>
            <option value="Foldable">Foldable</option>
            <option value="Mid-range">Mid-range</option>
            <option value="Budget">Budget</option>
          </select>
        </label>
        <label htmlFor="ramFilter">
          <select
            id="ramFilter"
            name="ramFilter"
            className="text-[#063447] bg-[#eeeeeed1] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
          >
            <option value="" selected>
              Ram
            </option>
            <option value="4GB">4GB</option>
            <option value="6GB">6GB</option>
            <option value="8GB">8GB</option>
            <option value="12GB">12GB</option>
          </select>
        </label>
        <label htmlFor="minAndMaxPriceFilter" className="flex gap-2">
          <input
            placeholder="min price"
            onChange={(e) => handleMinPriceChange(e)}
            ref={minPriceInputRef}
            name="minPrice"
            min="0"
            max="1299"
            className="bg-[#eeeeeed1] text-[#063447] w-[93px] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
            type="number"
          />
          <input
            placeholder="max price"
            onChange={(e) => handleMaxPriceChange(e)}
            ref={maxPriceInputRef}
            name="maxPrice"
            min="1"
            max="1300"
            className="bg-[#eeeeeed1] text-[#063447] w-[93px] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
            type="number"
          />
        </label>
      </div>
    </div>
  );
}
