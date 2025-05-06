import AddToFavoriteElement from "./AddToFavoriteElement";
import AddToCartElement from "./AddToCartElement";
import { productDetailsContext } from "./ProductDetailsState";
import { useContext, useState } from "react";
export default function MoreDetails() {
  const { productDetails } = useContext(productDetailsContext);
  const [imagesState, setImagesState] = useState(productDetails.images[0]);

  return Object.keys(productDetails).length == 0 ? (
    <div className="flex justify-center !m-[10px]">
      <img src="images-folder\Waiting.png" />
    </div>
  ) : (
    <div className="moreDetailsCard flex justify-center gap-5 text-[#eeeeeed1] !mt-[20px] !mb-[20px] !ml-[10px] !mr-[10px]">
      <div className="grid gap-5 justify-items-center">
        <img className="h-[280px] w-[280px]" src={imagesState} />
        <div className="flex items-center gap-2.5 flex-wrap">
          {productDetails.images.map((m, index) => (
            <img
              onClick={(e) => setImagesState(m)}
              src={m}
              key={index}
              className="w-20 h-20"
            />
          ))}
        </div>
      </div>
      <div className="grid gap-3 h-[fit-content]">
        <h1 className="font-normal text-[25px] border-b-1 border-[#eeeeeed1]">
          {productDetails.name}
        </h1>
        <div className="grid leading-[1.6]">
          <h1 className="font-bold text-[20px]">
            Brand:<span className="font-normal"> {productDetails.brand}</span>
          </h1>
          <h1 className="font-bold text-[20px]">
            Category:
            <span className="font-normal"> {productDetails.category}</span>
          </h1>
          <h1 className="font-bold text-[20px]">
            storage:
            <span className="font-normal"> {productDetails.storage}</span>
          </h1>
          <h1 className="font-bold text-[20px]">
            ram:
            <span className="font-normal"> {productDetails.ram}</span>
          </h1>
          <h1 className="font-bold text-[20px]">
            price:
            <span className="font-normal"> {productDetails.price}</span>
          </h1>
          <h1 className="font-bold text-[20px]">
            production:
            <span className="font-normal"> {productDetails.production}</span>
          </h1>
        </div>
        <p className="!p-[3px] bg-[#eeeeeed1] text-[#063447] rounded-[4px] w-[350px] font-medium">
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
