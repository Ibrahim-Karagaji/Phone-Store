import AddToFavoriteElement from "./AddToFavoriteElement";
import { productDetailsContext } from "./ProductDetailsState";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AddToCartElement from "./AddToCartElement";
export default function DisplayPeoducts(products) {
  const productDetails = useContext(productDetailsContext);
  const newProducts = products.map((p, index) => {
    return (
      <div
        key={index}
        className="displayPeoducts text-[15px] text-[#eeeeeed4] rounded-[5px] shadow-[0px_0px_2px_0px_black] grid  w-[fit-content] duration-300 hover:-translate-y-1"
      >
        <Link
          onClick={() => {
            productDetails.addProduct(p);
          }}
          to="/More-Details"
        >
          <div className="more-details w-[auto] h-[auto] ">
            <img
              className="homePageProductsImg h-full rounded-[5px] max-w-[230px] max-h-[350px] !mr-[auto] !ml-[auto]"
              src={p.images[0]}
            />
          </div>
        </Link>
        <div className="grid gap-[3px] !p-[5px]">
          <h1 className="rounded-[5px] font-bold">{p.name}</h1>
          <p className="text-[#063447] bg-[#eeeeeed4] max-w-[220px] !p-[3px] rounded-[5px] font-semibold displayPeoductsDescription">
            {p.description}
          </p>
          <p className="rounded-[5px] font-bold">Price: {p.price}$</p>
        </div>
        <div className="flex justify-between items-center">
          <AddToFavoriteElement product={p} />
          <AddToCartElement product={p} />
        </div>
      </div>
    );
  });
  return newProducts;
}
