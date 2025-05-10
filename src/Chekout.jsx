import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Chekout() {
  const getShoppingcartProducts = window.localStorage.getItem("shoppingCart");
  const shoppingCart = JSON.parse(getShoppingcartProducts);

  return (
    <div className=" text-[#eeeeeed1] !p-[4px]">
      <div className="flex justify-between items-center shadow bg-[#eeeeeed1] text-[#063447] rounded-[5px] !p-[3px]">
        <h1 className="text-[30px] !p-[3px] font-semibold">Chekout</h1>
        <Link to="/">
          <i className="fa-solid fa-house-user text-[23px] duration-200 hover:-translate-y-1 !p-[3px]"></i>
        </Link>
      </div>
    </div>
  );
}
