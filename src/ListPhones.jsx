import { filtersStateContext } from "./FiltersState";
import { useEffect, useContext, useState } from "react";
import FiltersCards from "./FiltersCards";

export default function ListPhones() {
  const filters = useContext(filtersStateContext);

  const [products, setProducts] = useState({
    products: [],
    isLoading: true,
    error: false,
  });

  const handleBrandState = (e) => {
    filters.handleAddBrandState(e.target.value);
  };

  const handleStorageState = (e) => {
    filters.handleAddStorageState(e.target.value);
  };

  const handleCategoryState = (e) => {
    filters.handleAddCategoryState(e.target.value);
  };

  const handleRamState = (e) => {
    filters.handleAddRamState(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    filters.handleAddMinPriceState(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    filters.handleAddMaxPriceState(e.target.value);
    const c = document.getElementById("yf").getBoundingClientRect();
    c;
  };

  useEffect(() => {
    fetch(
      `http://localhost:7777/phones?brand=${filters.filtersState.brand}&storage=${filters.filtersState.storage}&category=${filters.filtersState.category}&ram=${filters.filtersState.ram}&minPrice=${filters.filtersState.minPrice}&maxPrice=${filters.filtersState.maxPrice}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Network response was not ok");
      })
      .then((data) => {
        setProducts((Prey) => ({ ...Prey, products: data }));
      })
      .catch((error) => {
        setProducts((Prey) => ({ ...Prey, error: true }));
        console.error("There was a problem with the fetch operation:", error);
      })
      .finally(() => {
        setProducts((Prey) => ({ ...Prey, isLoading: false }));
      });
  }, [filters.filtersState]);

  return products.isLoading == true ? (
    <div className="grid w-[fit-content] !m-[auto] text-center bg-[#002737] text-[#eeeeeed1] rounded-[4px]">
      <h1 className="text-[23px]">Loading...</h1>
      <img src="images-folder\Waiting.png" />
    </div>
  ) : (
    <div>
      <div className="flex gap-3 !mt-[10px] !mb-[10px] w-[fit-content] !m-[auto] bg-[#002737] !p-[10px] rounded-[4px] overflow-auto min-w-[300px] max-w-[100%]">
        <label
          htmlFor="brandFilter"
          className="grid text-center text-[#eeeeeed1] gap-1"
        >
          <h1 className="font-normal">Brand</h1>
          <select
            onClick={(e) => {
              handleBrandState(e);
            }}
            id="brandFilter"
            name="brandFilter"
            className="text-[#063447] bg-[#eeeeeed1] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
          >
            <option value="">All</option>
            {[
              "OnePlus",
              "Samsung",
              "Apple",
              "Vivo",
              "Xiaomi",
              "Honor",
              "Realme",
              "Oppo",
            ].map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="storageFilter"
          className="grid text-center text-[#eeeeeed1] gap-1"
        >
          <h1 className="font-normal">Storge</h1>
          <select
            onClick={(e) => {
              handleStorageState(e);
            }}
            id="storageFilter"
            name="brandFilter"
            className="text-[#063447] bg-[#eeeeeed1] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
          >
            <option value="">All</option>
            {["64GB", "128GB", "256GB", "512GB"].map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="categoryFilter"
          className="grid text-center text-[#eeeeeed1] gap-1"
        >
          <h1 className="font-normal">category</h1>
          <select
            onClick={(e) => {
              handleCategoryState(e);
            }}
            id="categoryFilter"
            name="categoryFilter"
            className="text-[#063447] bg-[#eeeeeed1] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
          >
            <option value="">All</option>
            {["Flagship", "Mid-Range", "Budget"].map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="ramFilter">
          <select
            onClick={(e) => {
              handleRamState(e);
            }}
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
            disabled={
              filters.filtersState.maxPrice <= filters.filtersState.minPrice
            }
            step="50"
            placeholder="min-price"
            onChange={(e) => handleMinPriceChange(e)}
            name="minPrice"
            max="1299"
            className="bg-[#eeeeeed1] text-[#063447] w-[93px] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
            type="number"
          />
          <input
            step="50"
            placeholder="max-price"
            onChange={(e) => handleMaxPriceChange(e)}
            name="maxPrice"
            max="1300"
            min="0"
            className="bg-[#eeeeeed1] text-[#063447] w-[93px] rounded-[4px] !pt-[3px] !pb-[3px] !pl-[5px] !pr-[5px]"
            type="number"
          />
        </label>
      </div>
      <div className="filters-pareant grid gap-5 grid-cols-2 justify-center items-center w-[fit-content] !m-[auto] !p-[10px] rounded-[4px] min-w-[300px] max-w-[100%]">
        {products.products.length != 0 ? (
          products.products
            .map((item, index) => (
              <FiltersCards key={index} products={item} index={index} />
            ))
            .slice(0, 10)
        ) : (
          <div className="empty-image grid justify-center text-center bg-[#002737] text-[#eeeeeed1] rounded-[4px]">
            <h1 className="text-[23px]">Not Found</h1>
            <img
              src="images-folder\empty.png"
              className="w-[500px] h-[500px] "
            />
          </div>
        )}
      </div>
    </div>
  );
}
