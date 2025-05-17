import { Link } from "react-router-dom";
import AddToFavoriteElement from "./AddToFavoriteElement";
import AddToCartElement from "./AddToCartElement";
import { productDetailsContext } from "./ProductDetailsState";
import { useContext } from "react";
export default function FiltersCards({ products, index, visabilState }) {
  const productDetails = useContext(productDetailsContext);
  return (
    <div
      ref={index + 1 == visabilState.productsCounter ? visabilState.ref : null}
      className="filter-card DisplayPeoducts w-fit flex gap-2 text-[#eeeeeed1] shadow-[0px_0px_5px_0px_black] !p-[3px] rounded-[4px] duration-500 hover:shadow-[0px_0px_10px_0px_black] hover:-translate-y-1"
      key={index}
    >
      <Link
        onClick={() => {
          productDetails.addProduct(products);
        }}
        to="/More-Details"
      >
        <div className="more-details">
          <img
            className="min-w-[180px] max-w-[220px] !ml-[auto] !mr-[auto] min-h-[180px] max-h-[190px] rounded-[4px]"
            src={products.images[0]}
          />
        </div>
      </Link>
      <div className="grid gap-2">
        <h1 className="text-[20px] font-normal productNameOfFiltersCard">
          {products.name}
        </h1>
        <p className="text-[#063447] bg-[#eeeeeed1] rounded-[4px] !p-[5px] min-w-[190px] max-w-[220px]">
          {products.description}
        </p>
        <div className="flex justify-between items-center border-b-[1px] border-b-[#eeeeee40]">
          <span>Price: {products.price}$</span>
          <AddToFavoriteElement product={products} />
        </div>
        <AddToCartElement product={products} />
      </div>
    </div>
  );
}
