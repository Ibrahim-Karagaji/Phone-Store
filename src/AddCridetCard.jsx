import { useRef } from "react";
export default function AddCridetCard({ cardInfo, payByCardOrCash }) {
  const nameInput = useRef(null);
  const cardNumberInput = useRef(null);
  const cvvInput = useRef(null);
  const dateInput = useRef(null);

  const handleNameInput = () => {
    if (cardInfo.cardInfo.name.length < 3) {
      nameInput.current.style.color = "red";
      nameInput.current.style.borderBottomColor = "red";
      nameInput.current.children[3].style.display = "block";
      return false;
    } else {
      nameInput.current.style.color = "#eeeeeed1";
      nameInput.current.style.borderBottomColor = "#eeeeeed1";
      nameInput.current.children[3].style.display = "none";
      return true;
    }
  };

  const handleCardNumberInput = () => {
    if (cardInfo.cardInfo.cardNumber.length < 10) {
      cardNumberInput.current.style.color = "red";
      cardNumberInput.current.style.borderBottomColor = "red";
      cardNumberInput.current.children[3].style.display = "block";
      return false;
    } else {
      cardNumberInput.current.style.color = "#eeeeeed1";
      cardNumberInput.current.style.borderBottomColor = "#eeeeeed1";
      cardNumberInput.current.children[3].style.display = "none";
      return true;
    }
  };

  const handleDateInput = () => {
    if (cardInfo.cardInfo.expirationDate.length < 9) {
      dateInput.current.style.color = "red";
      dateInput.current.style.borderBottomColor = "red";
      dateInput.current.children[3].style.display = "block";
      return false;
    } else {
      dateInput.current.style.color = "#eeeeeed1";
      dateInput.current.style.borderBottomColor = "#eeeeeed1";
      dateInput.current.children[3].style.display = "none";
      return true;
    }
  };

  const handleCVVInout = () => {
    if (cardInfo.cardInfo.CVV.length != 3) {
      cvvInput.current.style.color = "red";
      cvvInput.current.style.borderBottomColor = "red";
      cvvInput.current.children[3].style.display = "block";
      return false;
    } else {
      cvvInput.current.style.color = "#eeeeeed1";
      cvvInput.current.style.borderBottomColor = "#eeeeeed1";
      cvvInput.current.children[3].style.display = "none";
      return true;
    }
  };

  return (
    <div
      className={`${
        payByCardOrCash == "card" ? "grid" : "hidden"
      } !p-[5px] gap-5 cardInfo`}
    >
      <h1 className="text-[18px] font-semibold">Add a Cridet Card</h1>
      <form className="grid gap-11">
        <label
          ref={nameInput}
          className="relative border-b-1 border-b-[#eeeeeed1] !p-[8px] flex gap-2 items-center text-[#eeeeeed1] bg-[#002737] rounded-[3px]"
        >
          <p className="absolute text-[13px] top-[-18px] left-[0px]">
            The Name
          </p>
          <i className="fa-solid fa-user"></i>
          <input
            onInput={(e) => {
              cardInfo.setCardInfo((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
            required
            placeholder="The Name"
          />
          <p className="absolute text-[12px] bottom-[-20px] left-[0px] hidden">
            The name should consist of 3 letters at least
          </p>
        </label>
        <label
          ref={cardNumberInput}
          className="relative border-b-1 border-b-[#eeeeeed1] !p-[8px] flex gap-2 items-center text-[#eeeeeed1] bg-[#002737] rounded-[3px]"
        >
          <p className="absolute text-[13px] top-[-18px] left-[0px]">
            Card Number
          </p>
          <i className="fa-solid fa-credit-card"></i>
          <input
            onInput={(e) => {
              cardInfo.setCardInfo((prev) => {
                return { ...prev, cardNumber: e.target.value };
              });
            }}
            required
            placeholder="**** **** ****"
            type="number"
          />
          <p className="absolute text-[12px] bottom-[-20px] left-[0px] hidden">
            Card number should consist between 10 and 19 digits
          </p>
        </label>
        <div className="flex gap-2 AddCridetCardInputs">
          <label
            ref={dateInput}
            className=" relative border-b-1 border-b-[#eeeeeed1] !p-[8px] flex gap-2 items-center text-[#eeeeeed1] bg-[#002737] rounded-[3px]"
          >
            <p className="absolute text-[13px] top-[-18px] left-[0px]">
              Expiration Date
            </p>
            <i className="fa-solid fa-calendar-days"></i>
            <input
              onInput={(e) => {
                cardInfo.setCardInfo((prev) => {
                  return { ...prev, expirationDate: e.target.value };
                });
              }}
              type="date"
              required
              placeholder="Card Number"
            />
            <p className="absolute text-[12px] bottom-[-20px] left-[0px] hidden">
              Invalied date
            </p>
          </label>
          <label
            ref={cvvInput}
            className="w-full relative border-b-1 border-b-[#eeeeeed1] !p-[8px] flex gap-2 items-center text-[#eeeeeed1] bg-[#002737] rounded-[3px]"
          >
            <p className="absolute text-[13px] top-[-18px] left-[0px]">CVV</p>
            <i className="fa-solid fa-calendar-days"></i>
            <input
              onInput={(e) => {
                cardInfo.setCardInfo((prev) => {
                  return { ...prev, CVV: e.target.value };
                });
              }}
              type="number"
              required
              placeholder="CVV"
              className="no-spinne"
            />
            <p className="absolute text-[12px] bottom-[-20px] left-[0px] hidden">
              the CVV should be 3 digits
            </p>
          </label>
        </div>
        <div
          onClick={() => {
            const name = handleNameInput();
            const cardNumber = handleCardNumberInput();
            const cvv = handleCVVInout();
            const date = handleDateInput();
            if (
              name == true &&
              cardNumber == true &&
              cvv == true &&
              date == true
            )
              cardInfo.setCardInfo((prev) => {
                return { ...prev, complete: true };
              });
            else
              cardInfo.setCardInfo((prev) => {
                return { ...prev, complete: false };
              });
          }}
          className="flex items-center !pl-[5px] !pr-[5px] !pt-[3px] !pb-[3px] gap-1 rounded-[3px] bg-[#eeeeeed1] text-[#063447] w-fit !mt-[-10px] duration-300 hover:bg-[#eeeeeeb4]"
        >
          <i className="fa-solid fa-address-card"></i>
          <p>ADD</p>
        </div>
      </form>
    </div>
  );
}
