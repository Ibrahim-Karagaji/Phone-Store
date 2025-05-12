import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useState, useRef } from "react";
import UserLocation from "./UserLocation";

export default function Chekout() {
  const getShoppingcartProducts = window.localStorage.getItem("shoppingCart");
  const shoppingCart = JSON.parse(getShoppingcartProducts);
  const dialogRef = useRef(null);
  const [userLocation, setUserLocation] = useState({
    name: "",
    phoneNumber: "",
    country: "",
    city: "",
    address: "",
    moreDetails: "",
    isInfoComplte: false,
  });

  function calculateTheTotle() {
    let total = 0;

    for (const item of shoppingCart) {
      total += item.price;
    }
    return total;
  }

  return (
    <div className=" text-[#eeeeeed1] !p-[4px]">
      <div className="flex justify-between items-center shadow bg-[#eeeeeed1] text-[#063447] rounded-[5px] !p-[3px]">
        <h1 className="text-[30px] !p-[3px] font-semibold">Chekout</h1>
        <Link to="/">
          <i className="fa-solid fa-house-user text-[23px] duration-200 hover:-translate-y-1 !p-[3px]"></i>
        </Link>
      </div>
      <div className="chekout flex w-fit gap-3 !mr-[auto] !ml-[auto] !mt-[10px] !p-[3px] shadow">
        <div className="grid gap-3 text-[#eeeeeed1] shadow">
          <div className="grid !p-[5px] shadow-[0px_0px_2px_0px_black] font-medium rounded-[5px] h-[fit-content]">
            <h1 className="!-p[3px] !m-[4px] border-b-[1px] border-b-[#eeeeee40] text-[23px]">
              Summary
            </h1>
            <div className="!-p[3px] !m-[4px] border-b-[1px] border-b-[#eeeeee40] grid gap-3">
              <div className="!mt-[5px] !mb-[5px] flex justify-between items-center gap-30 text-[20px]">
                <p>items ({shoppingCart.length})</p>
                <p>${calculateTheTotle()}</p>
              </div>
              <div className="flex justify-between items-center gap-45 text-[20px]">
                <p>Delivery:</p>
                {shoppingCart.length >= 3 ? (
                  <p className="text-[green]">Free</p>
                ) : (
                  <p>$+5.00</p>
                )}
              </div>
              <div className="text-[red] !mt-[5px] !mb-[5px] flex justify-between items-center gap-30 text-[20px]">
                <p>Totle:</p>
                <p>
                  $
                  {shoppingCart.length >= 3
                    ? calculateTheTotle()
                    : calculateTheTotle() + 5}
                </p>
              </div>
            </div>
            <button className="w-full !mt-[3px] !mb-[3px] flex gap-2 items-center justify-center !p-[5px] rounded-[5px] bg-[#eeeeeed1] text-[#063447] duration-300 hover:bg-[#eeeeeeb4]">
              <i className="fa-solid fa-credit-card"></i>
              <p>COMPLATE</p>
            </button>
          </div>
          <div className="grid gap-2 h-[280px] overflow-auto">
            {shoppingCart.map((product, index) => (
              <div
                key={index}
                className="flex gap-2 rounded-[5px] shadow-[0px_0px_2px_0px_black] !p-[3px]"
              >
                <img src={product.images[0]} className="w-[65px] h-[65px]" />
                <div className="grid text-[12px]">
                  <h1 className="font-semibold text-[14px]">{product.name}</h1>
                  <p className="leading-5.0 max-w-[350px] productDescription">
                    {product.description}
                  </p>
                  <p className="font-semibold">{product.price}$</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2 h-fit">
            <h1 className="text-[23px] font-semibold">Location</h1>
            {userLocation.isInfoComplte ? (
              <div className="grid gap-3 !p-[10px] rounded-[5px] w-full shadow-[0px_0px_2px_0px_black]">
                <div className="flex items-center gap-30 border-b-1 border-b-[#eeeeeed1] !p-[5px] ">
                  <i className="fa-solid fa-location-dot text-[18px]"></i>
                  <button
                    onClick={() => {
                      dialogRef.current.showModal();
                    }}
                    className="flex items-center gap-2 rounded-[5px] !p-[5px] duration-200 hover:bg-[#eeeeee18]"
                  >
                    <i className="fa-solid fa-pen"></i>
                    <h1>CHANGE</h1>
                  </button>
                </div>
                <div className="flex justify-between border-b-1 border-b-[#eeeeeed1] font-semibold !p-[5px]">
                  <p>Name :</p>
                  <p>{userLocation.name}</p>
                </div>
                <div className="flex justify-between border-b-1 border-b-[#eeeeeed1] font-semibold !p-[5px]">
                  <p>Address :</p>
                  <p>{userLocation.address}</p>
                </div>
                <div className="flex justify-between border-b-1 border-b-[#eeeeeed1] font-semibold !p-[5px]">
                  <p>Phone :</p>
                  <p>{userLocation.phoneNumber}</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-between bg-[#191207] !p-[10px] gap-5 rounded-[5px] text-[14px]">
                <div className="flex items-center gap-2 text-center">
                  <i className="fa-solid fa-triangle-exclamation text-amber-300 "></i>
                  <p className="text-[#c7c7a7] font-normal">
                    You Didn't Add Your Location Yet
                  </p>
                </div>
                <div className="flex items-center gap-2 text-amber-300 !p-[5px] text-[15px] duration-200 hover:bg-[#ffff0017] rounded-[5px] text-center">
                  <i className="fa-solid fa-location-dot "></i>
                  <p
                    className="font-normal"
                    onClick={() => dialogRef.current.showModal()}
                  >
                    OPEN LOCATION MANEGEMENT
                  </p>
                </div>
              </div>
            )}
            <UserLocation
              dialogRef={dialogRef}
              userLocation={{ userLocation, setUserLocation }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
