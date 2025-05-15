import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useState, useRef } from "react";
import UserLocation from "./UserLocation";
import AddCridetCard from "./AddCridetCard";

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
  const [payByCardOrCash, setPayByCardOrCash] = useState("cash");
  const [cardInfo, setCardInfo] = useState({
    name: "",
    cardNumber: "",
    expirationDate: "",
    CVV: "",
    complete: false,
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
        <h1 className="text-[25px] !p-[3px] font-semibold">Chekout</h1>
        <Link to="/">
          <i className="fa-solid fa-house-user text-[20px] duration-200 hover:-translate-y-1 !p-[3px]"></i>
        </Link>
      </div>
      <div className="chekout flex w-fit gap-3 !mr-[auto] !ml-[auto] !mt-[5px] !p-[3px] shadow">
        <div className="grid gap-3 h-fit text-[#eeeeeed1] shadow">
          <div className="grid !p-[5px] shadow-[0px_0px_2px_0px_black] font-medium rounded-[5px] h-[fit-content]">
            <h1 className="!-p[3px] !m-[4px] border-b-[1px] border-b-[#eeeeee40] text-[20px]">
              Summary
            </h1>
            <div className="!-p[3px] !m-[4px] border-b-[1px] border-b-[#eeeeee40] grid gap-3">
              <div className="!mt-[5px] !mb-[5px] flex justify-between items-center gap-30 text-[18px]">
                <p>items ({shoppingCart.length})</p>
                <p>${calculateTheTotle()}</p>
              </div>
              <div className="flex justify-between items-center gap-45 text-[18px]">
                <p>Delivery:</p>
                {shoppingCart.length >= 3 ? (
                  <p className="text-[green]">Free</p>
                ) : (
                  <p>$+5.00</p>
                )}
              </div>
              <div className="text-[red] !mt-[5px] !mb-[5px] flex justify-between items-center gap-30 text-[18px]">
                <p>Totle:</p>
                <p>
                  $
                  {shoppingCart.length >= 3
                    ? calculateTheTotle()
                    : calculateTheTotle() + 5}
                </p>
              </div>
            </div>
            <button className="w-full !mt-[3px] !mb-[3px] flex gap-2 items-center justify-center !p-[5px] rounded-[5px] bg-[#eeeeeed1] text-[#063447] duration-300 hover:bg-[#eeeeeeb4] text-[15px]">
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
        <div className="grid gap-5 h-fit">
          <div className="grid gap-2 h-fit">
            <h1 className="text-[23px] font-semibold">Location</h1>
            {userLocation.isInfoComplte ? (
              <div className="grid gap-3 !p-[10px] rounded-[5px] w-full shadow-[0px_0px_2px_0px_black]">
                <div className="flex items-center justify-between border-b-1 border-b-[#eeeeeed1] !p-[5px] text-[#00b2ff]">
                  <i className="fa-solid fa-location-dot text-[18px]"></i>
                  <button
                    onClick={() => {
                      setUserLocation({
                        name: "",
                        phoneNumber: "",
                        country: "",
                        city: "",
                        address: "",
                        moreDetails: "",
                        isInfoComplte: false,
                      });
                      dialogRef.current.showModal();
                    }}
                    className="flex items-center gap-2 rounded-[5px] text-[#00b2ff] !p-[5px] duration-200 hover:bg-[#eeeeee18]"
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
                <div className="flex items-center gap-2 text-amber-300 !p-[5px] text-[13px] duration-200 hover:bg-[#ffff0017] rounded-[5px] text-center">
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
          <div className="grid gap-2 h-fit">
            <h1 className="text-[23px] font-semibold">Payment</h1>
            <form className="grid !p-[5px] rounded-[5px] shadow">
              <label
                onClick={() => setPayByCardOrCash("cash")}
                className="grid gap-2 text-[22px] border-b-[#eeeeeed1] border-b-1 !p-[5px]"
              >
                <div className="flex items-center gap-2">
                  <input
                    checked={payByCardOrCash == "cash" ? true : false}
                    className="h-[18px] w-[18px]"
                    type="radio"
                    name="pay"
                  />
                  <p className="text-[19px]">Cash On Delivery</p>
                </div>
                <div
                  className={`${
                    payByCardOrCash == "cash" ? "flex" : "hidden"
                  } gap-2 items-center !p-[10px] bg-[#002737] shadow rounded-[3px]`}
                >
                  <svg
                    className="w-[19px] bg-[#00b2ff] rounded-[50%]"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="InfoOutlinedIcon"
                  >
                    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                  </svg>
                  <p className="text-[13px] font-semibold">
                    The Delivery Representative Will Delever The Order To The
                    Location You Added
                  </p>
                </div>
              </label>
              <label
                onClick={() => setPayByCardOrCash("card")}
                className="grid gap-2 items-center !p-[5px]"
              >
                <div
                  className={`${
                    payByCardOrCash == "card" ? "flex" : "hidden"
                  } gap-2 items-center !p-[10px] bg-[#002737] shadow rounded-[3px]`}
                >
                  <svg
                    className="w-[19px] bg-red-600 rounded-[50%]"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="InfoOutlinedIcon"
                  >
                    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                  </svg>
                  <p className="text-[13px] font-semibold">
                    BE CAREFUL ! NEVER ADD A REAL CREDIT CARD INFORMATION
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    checked={payByCardOrCash == "card" ? true : false}
                    className="h-[18px] w-[18px]"
                    type="radio"
                    name="pay"
                  />
                  <p className="text-[19px]">Cridet Card</p>
                </div>
                {cardInfo.complete ? (
                  <div className="grid gap-3">
                    <h1 className="text-[25px] !p-[3px] font-semibold">
                      Choosed Card
                    </h1>
                    <div className="flex gap-2 justify-between !p-[5px] bg-[#002737]">
                      <div className="flex gap-2 items-center">
                        <img
                          className="w-[30px]"
                          src="images-folder/credit-card.svg"
                        />
                        <p className="font-semibold">{cardInfo.cardNumber}</p>
                      </div>
                      <button
                        onClick={() => {
                          setCardInfo({
                            name: "",
                            cardNumber: "",
                            expirationDate: "",
                            CVV: "",
                            complete: false,
                          });
                        }}
                        className="flex items-center gap-2 rounded-[5px] !p-[5px] text-[#00b2ff] duration-200 hover:bg-[#eeeeee18]"
                      >
                        <i className="fa-solid fa-pen"></i>
                        <h1>CHANGE</h1>
                      </button>
                    </div>
                  </div>
                ) : (
                  <AddCridetCard
                    cardInfo={{ cardInfo, setCardInfo }}
                    payByCardOrCash={payByCardOrCash}
                  />
                )}
              </label>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
