import AddToFavoriteElement from "./AddToFavoriteElement";
import AddToCartElement from "./AddToCartElement";
import { productDetailsContext } from "./ProductDetailsState";
import { useContext, useState } from "react";
import { useEffect } from "react";
export default function ProductMoreDetails() {
  const { productDetails } = useContext(productDetailsContext);

  const [imagesState, setImagesState] = useState(
    Object.keys(productDetails).length == 0 ? "" : productDetails.images[0]
  );

  useEffect(() => {
    if (Object.keys(productDetails).length != 0)
      setImagesState(productDetails.images[0]);
  }, [productDetails]);

  return (
    <div className="moreDetailsCard text-[15px] flex justify-center gap-5 text-[#eeeeeed1] !mt-[20px] !mb-[20px] !ml-[10px] !mr-[10px] shadow sm:!mb-[150px]">
      <div className="grid gap-5 justify-items-center">
        <img className="h-[250px] w-[250px]" src={imagesState} />
        <div className="flex items-center gap-2.5 flex-wrap">
          {productDetails.images.map((m, index) => (
            <img
              onClick={(e) => setImagesState(m)}
              src={m}
              key={index}
              className="w-17 h-17"
            />
          ))}
        </div>
      </div>
      <div className="grid gap-3 h-[fit-content] ">
        <h1 className="font-normal text-[23px] border-b-1 border-[#eeeeeed1]">
          {productDetails.name}
        </h1>
        <div className="grid leading-[1.6] text-[18px]">
          <h1 className="font-bold">
            Brand:<span className="font-normal"> {productDetails.brand}</span>
          </h1>
          <h1 className="font-bold ">
            Category:
            <span className="font-normal"> {productDetails.category}</span>
          </h1>
          <h1 className="font-bold">
            storage:
            <span className="font-normal"> {productDetails.storage}</span>
          </h1>
          <h1 className="font-bold">
            ram:
            <span className="font-normal"> {productDetails.ram}</span>
          </h1>
          <h1 className="font-bold">
            price:
            <span className="font-normal"> {productDetails.price}$</span>
          </h1>
          <h1 className="font-bold">
            production:
            <span className="font-normal"> {productDetails.production}</span>
          </h1>
        </div>
        <p className="!p-[3px] bg-[#eeeeeed1] text-[#063447] rounded-[4px] max-w-[350px] font-medium">
          {productDetails.description}
        </p>
        <div className="flex justify-between border-t-1 border-[#eeeeeed1] !pt-[10px]">
          <AddToCartElement product={productDetails} />
          <AddToFavoriteElement product={productDetails} />
        </div>
      </div>
    </div>
  );
}
