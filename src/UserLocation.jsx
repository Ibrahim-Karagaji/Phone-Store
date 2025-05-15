import { useRef } from "react";
export default function UserLocation({ dialogRef, userLocation }) {
  const NameInput = useRef();
  const phoneNumberInput = useRef();
  const countryInput = useRef();
  const cityInput = useRef();
  const adressInput = useRef();

  const clearInputsValue = () => {
    NameInput.current.children[1].value = "";
    phoneNumberInput.current.children[1].value = "";
    countryInput.current.children[1].value = "";
    cityInput.current.children[1].value = "";
    adressInput.current.children[1].value = "";
  };

  const handleNameInput = () => {
    if (userLocation.userLocation.name.length < 3) {
      NameInput.current.children[1].style.borderBottomColor = "red";
      NameInput.current.children[0].style.color = "red";
      NameInput.current.children[1].style.color = "red";
      NameInput.current.children[2].style.color = "red";
      NameInput.current.children[2].style.opacity = "100%";
      return false;
    } else {
      NameInput.current.children[1].style.color = "#063447";
      NameInput.current.children[1].style.borderBottomColor = "#063447";
      NameInput.current.children[0].style.color = "#063447";
      NameInput.current.children[2].style.opacity = "0%";
      return true;
    }
  };

  const handlePhoneNumberInput = () => {
    if (userLocation.userLocation.phoneNumber.length < 9) {
      phoneNumberInput.current.children[1].style.borderBottomColor = "red";
      phoneNumberInput.current.children[0].style.color = "red";
      phoneNumberInput.current.children[1].style.color = "red";
      phoneNumberInput.current.children[2].style.color = "red";
      phoneNumberInput.current.children[2].style.opacity = "100%";
      return false;
    } else {
      phoneNumberInput.current.children[1].style.color = "#063447";
      phoneNumberInput.current.children[1].style.borderBottomColor = "#063447";
      phoneNumberInput.current.children[0].style.color = "#063447";
      phoneNumberInput.current.children[2].style.opacity = "0%";
      return true;
    }
  };

  const handleCountryInput = () => {
    if (userLocation.userLocation.country.length < 3) {
      countryInput.current.children[1].style.borderBottomColor = "red";
      countryInput.current.children[0].style.color = "red";
      countryInput.current.children[1].style.color = "red";
      countryInput.current.children[2].style.color = "red";
      countryInput.current.children[2].style.opacity = "100%";
      return false;
    } else {
      countryInput.current.children[1].style.color = "#063447";
      countryInput.current.children[1].style.borderBottomColor = "#063447";
      countryInput.current.children[0].style.color = "#063447";
      countryInput.current.children[2].style.opacity = "0%";
      return true;
    }
  };

  const handleCityInput = () => {
    if (userLocation.userLocation.city.length < 3) {
      cityInput.current.children[1].style.borderBottomColor = "red";
      cityInput.current.children[0].style.color = "red";
      cityInput.current.children[1].style.color = "red";
      cityInput.current.children[2].style.color = "red";
      cityInput.current.children[2].style.opacity = "100%";
      return false;
    } else {
      cityInput.current.children[1].style.color = "#063447";
      cityInput.current.children[1].style.borderBottomColor = "#063447";
      cityInput.current.children[0].style.color = "#063447";
      cityInput.current.children[2].style.opacity = "0%";
      return true;
    }
  };

  const handleAdressInput = () => {
    if (userLocation.userLocation.address.length < 3) {
      adressInput.current.children[1].style.borderBottomColor = "red";
      adressInput.current.children[0].style.color = "red";
      adressInput.current.children[1].style.color = "red";
      adressInput.current.children[2].style.color = "red";
      adressInput.current.children[2].style.opacity = "100%";
      return false;
    } else {
      adressInput.current.children[1].style.color = "#063447";
      adressInput.current.children[1].style.borderBottomColor = "#063447";
      adressInput.current.children[0].style.color = "#063447";
      adressInput.current.children[2].style.opacity = "0%";
      return true;
    }
  };

  return (
    <dialog
      className="h-[100%] w-[100%] border-none bg-[#00000066] top-[20px] left-[20px] !p-[2px] rounded-[3px]"
      ref={dialogRef}
    >
      <div className="grid bg-[#eee] text-[#063447] !p-[5px] rounded-[3px] max-w-[800px] !ml-[auto] !mr-[auto] !mt-[50px]">
        <div className="shadow flex justify-between items-center border-b-[1px] border-b-[#063447] !mb-[40px] text-[23px]">
          <div className="flex gap-1 items-center">
            <i className="fa-solid fa-location-crosshairs "></i>
            <h1 className="font-semibold">Add a location</h1>
          </div>
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              dialogRef.current.close();
            }}
          ></i>
        </div>
        <div className="locationInfoPareant grid gap-7 !p-[5px] shadow">
          <div className="flex gap-2 locationInfo w-auto">
            <div
              ref={NameInput}
              onInput={(e) => {
                userLocation.setUserLocation((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
              className="relative flex items-center gap-2 text-[16px] w-full !p-[4px]"
            >
              <i className="fa-solid fa-circle-user text-[23px]"></i>
              <input
                className="w-full border-b-[1px] border-b-[#063447]"
                placeholder="The Name"
              />
              <p className="absolute text-[13px] bottom-[-20px] left-[35px] text-[red] opacity-0 duration-200">
                the name should consist of 4 litters at least
              </p>
            </div>
            <div
              ref={phoneNumberInput}
              onInput={(e) => {
                userLocation.setUserLocation((prev) => {
                  return { ...prev, phoneNumber: e.target.value };
                });
              }}
              className="relative flex items-center gap-2 text-[16px] w-full !p-[4px]"
            >
              <i className="fa-solid fa-phone"></i>
              <input
                type="number"
                className="w-full border-b-[1px] border-b-[#063447]"
                placeholder="Phone Number"
              />
              <p className="absolute text-[12px] bottom-[-20px] left-[35px] text-[red] opacity-0 duration-200">
                Phone number should consist of 10 digits or more
              </p>
            </div>
          </div>
          <div className="flex gap-2 locationInfo w-auto">
            <div
              ref={countryInput}
              onInput={(e) => {
                userLocation.setUserLocation((prev) => {
                  return { ...prev, country: e.target.value };
                });
              }}
              className="relative flex items-center gap-2 text-[16px] w-full !p-[4px]"
            >
              <i className="fa-solid fa-earth-americas text-[20px]"></i>
              <input
                className="w-full border-b-[1px] border-b-[#063447]"
                placeholder="Country"
              />
              <p className="absolute text-[13px] bottom-[-20px] left-[35px] text-[red] opacity-0 duration-200">
                the counrty should consist of 3 litters at least
              </p>
            </div>
            <div
              ref={cityInput}
              onInput={(e) => {
                userLocation.setUserLocation((prev) => {
                  return { ...prev, city: e.target.value };
                });
              }}
              className="relative flex items-center gap-2 text-[16px] w-full !p-[4px]"
            >
              <i className="fa-solid fa-city text-[20px]"></i>
              <input
                className="w-full border-b-[1px] border-b-[#063447]"
                placeholder="City"
              />
              <p className="absolute text-[13px] bottom-[-20px] left-[35px] text-[red] opacity-0 duration-200">
                the city should consist of 3 litters at least
              </p>
            </div>
          </div>
          <div className="flex gap-2 locationInfo w-auto">
            <div
              ref={adressInput}
              onInput={(e) => {
                userLocation.setUserLocation((prev) => {
                  return { ...prev, address: e.target.value };
                });
              }}
              className="relative flex items-center gap-2 text-[16px] w-full !p-[4px]"
            >
              <i className="fa-solid fa-road"></i>
              <input
                className="w-full border-b-[1px] border-b-[#063447]"
                placeholder="Street Address"
              />
              <p className="absolute text-[13px] bottom-[-20px] left-[35px] text-[red] opacity-0 duration-200">
                the addres should consist of 3 litters at least
              </p>
            </div>
            <div
              onInput={(e) => {
                userLocation.setUserLocation((prev) => {
                  return { ...prev, moreDetails: e.target.value };
                });
              }}
              className="relative flex items-center gap-2 text-[16px] w-full !p-[4px]"
            >
              <i className="fa-solid fa-comment-dots text-[20px]"></i>
              <input
                className="w-full border-b-[1px] border-b-[#063447]"
                placeholder="More Details"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            if (
              handleNameInput() == true &&
              handlePhoneNumberInput() == true &&
              handleCountryInput() == true &&
              handleCityInput() == true &&
              handleAdressInput() == true
            ) {
              dialogRef.current.close();
              clearInputsValue();
              userLocation.setUserLocation((prev) => {
                return { ...prev, isInfoComplte: true };
              });
            } else
              userLocation.setUserLocation((prev) => {
                return { ...prev, isInfoComplte: false };
              });
          }}
          className="!p-[5px] flex gap-2 items-center text-[#eeeeeed1] bg-[#063447] hover:bg-[#002737] rounded-[5px] w-fit translate-x-2 !mt-[30px] duration-200"
        >
          <i className="fa-solid fa-location-dot"></i> <p>ADD LOCATION</p>
        </button>
      </div>
    </dialog>
  );
}
