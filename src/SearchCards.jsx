import React from "react";
import { useContext } from "react";
import { SearchStateContext } from "./SearchState";
import { productDetailsContext } from "./ProductDetailsState";
import { Link } from "react-router-dom";
export default function SearchCards() {
  const search = useContext(SearchStateContext);
  const moreDetilsState = useContext(productDetailsContext);

  function handleFilterProducts() {
    const i = search.searchProduct.product.filter((p) => {
      if (
        p.name.toLowerCase().includes(search.searchProduct.search.toLowerCase())
      )
        return p;
    });
    return i;
  }
  return handleFilterProducts().length != 0 ? (
    <div
      className={`absolute ${
        search.searchProduct.search.length == 0 ? "hidden" : "grid"
      } top-[60px] bg-[#eeeeeed1] text-[#063447] items-end z-10 max-w-[800px] rounded-[4px] duration-300`}
    >
      {handleFilterProducts()
        .map((p, index) => (
          <Link key={index} to="/More-Details">
            <div
              onClick={() => {
                moreDetilsState.addProduct(p);
              }}
              className="searchCards flex gap-1 !p-[5px] border-b-[1px] border-[#063447] border-solid duration-300 hover:-translate-y-1"
            >
              <img
                src={p.images[1]}
                className="w-[70px] h-[70px] rounded-[4px]"
              />
              <div className="grid text-[13px] gap-1">
                <p className="font-bold">{p.name}</p>
                <p className="font-medium">{p.description}</p>
                <p className="font-bold ">{p.price}$</p>
              </div>
            </div>
          </Link>
        ))
        .slice(0, 3)}
    </div>
  ) : (
    <div className="absolute grid top-[60px] bg-[#eeeeeed1] text-[#063447] text-center z-10 w-[150px] rounded-[4px] duration-300">
      <i className="fa-solid fa-face-sad-tear text-[35px]"></i>
      <h1 className="font-bold">Not Found</h1>
    </div>
  );
}
