import { shoppingCartProductsContext } from "./ShoppingCartProductsState";
import { useContext } from "react";
import ShoppingCartCard from "./ShoppingCartCard";
export default function ShoppingCart() {
  const shoppingCart = useContext(shoppingCartProductsContext);

  function calculateTheTotle() {
    let total = 0;

    for (const item of shoppingCart.shoppingCartState) {
      total += item.price;
    }
    return total;
  }

  return shoppingCart.shoppingCartState.length == 0 ? (
    <div
      className={`shadow-[0px_0px_5px_0px_black] grid gap-2 justify-self-center text-center rounded-[5px] !m-[15px] w-[fit-content] text-[23px] text-[#eeeeeed1] bg-[#002737]`}
    >
      <h1>shopping Cart is empty</h1>
      <img src="images-folder\empty.png" className="h-[400px] w-[500px] " />
    </div>
  ) : (
    <div className="shoppingCart flex gap-4 !mt-[10px] !mb-[10px] !ml-[15px] justify-center leading-[1.8]">
      <div className="grid !p-[5px] text-[#eeeeeed1] shadow-[0px_0px_2px_0px_black] font-medium rounded-[5px] h-[fit-content]">
        <h1 className="!-p[3px] !m-[4px] border-b-[1px] border-b-[#eeeeee40] text-[23px]">
          Summary
        </h1>
        <div className="!-p[3px] !m-[4px] border-b-[1px] border-b-[#eeeeee40] grid gap-3">
          <div className="!mt-[5px] !mb-[5px] flex justify-between items-center gap-30 text-[20px]">
            <p>items ({shoppingCart.shoppingCartState.length})</p>
            <p>${calculateTheTotle()}</p>
          </div>
          <div className="flex justify-between items-center gap-45 text-[20px]">
            <p>Delivery:</p>
            {shoppingCart.shoppingCartState.length >= 3 ? (
              <p className="text-[green]">Free</p>
            ) : (
              <p>$+5.00</p>
            )}
          </div>
          <div className="text-[red] !mt-[5px] !mb-[5px] flex justify-between items-center gap-30 text-[20px]">
            <p>Totle:</p>
            <p>
              $
              {shoppingCart.shoppingCartState.length >= 3
                ? calculateTheTotle()
                : calculateTheTotle() + 5}
            </p>
          </div>
        </div>
        <button className="!mt-[3px] !mb-[3px] flex gap-2 items-center justify-center !p-[5px] rounded-[5px] bg-[#00141c] text-[#eeeeee40]">
          <i className="fa-solid fa-credit-card"></i>
          <p>CHEKOUT</p>
        </button>
      </div>
      <div className="grid gap-3 !p-[5px] text-[#eeeeeed1] font-medium rounded-[5px]">
        <div className="flex items-center justify-between !p-[5px] h-[fit-content] rounded-[5px] shadow-[0px_0px_2px_0px_black]">
          <h1 className="font-bold text-[20px]">Products In Cart</h1>
          <button
            onClick={shoppingCart.handleClearShoppingCart}
            className="flex items-center gap-1 text-[15px] rounded-[3px] !p-[4px] bg-[#ff0000bf] hover:bg-[#d50000bf] duration-300 "
          >
            <i className="fa-solid fa-ban"></i>
            <p>CLEAR CART</p>
          </button>
        </div>
        <div className="grid gap-2 ShoppingCartCardParant">
          {shoppingCart.shoppingCartState.map((s, index) => (
            <ShoppingCartCard
              key={index}
              product={s}
              index={index}
              shoppingCart={shoppingCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
