import { useRef } from "react";
export default function AddCridetCard({ cardInfo, payByCardOrCash }) {
  const nameInput = useRef(null);
  const cardNumber = useRef(null);
  const cvv = useRef(null);
  const date = useRef(null);

  const handleNameInput = () => {
    if (cardInfo.cardInfo.name.length < 3) {
      nameInput.current.style.color = "red";
      nameInput.current.style.borderBottomColor = "red";
      nameInput.current.children[3].style.display = "block";
      return true;
    } else {
      nameInput.current.style.color = "#eeeeeed1";
      nameInput.current.style.borderBottomColor = "#eeeeeed1";
      nameInput.current.children[3].style.display = "none";
      return false;
    }
  };

  const handlecardNumber = () => {
    if (cardInfo.cardInfo.cardNumber.length < 10) {
      cardNumber.current.style.color = "red";
      cardNumber.current.style.borderBottomColor = "red";
      cardNumber.current.children[3].style.display = "block";
      return true;
    } else {
      cardNumber.current.style.color = "#eeeeeed1";
      cardNumber.current.style.borderBottomColor = "#eeeeeed1";
      cardNumber.current.children[3].style.display = "none";
      return false;
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
            The name should consist of 5 letters at least
          </p>
        </label>
        <label
          ref={cardNumber}
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
            ref={date}
            className="w-fit relative border-b-1 border-b-[#eeeeeed1] !p-[8px] flex gap-2 items-center text-[#eeeeeed1] bg-[#002737] rounded-[3px]"
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
            ref={cvv}
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
            handleNameInput(nameInput);
            handlecardNumber(cardNumber);
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
