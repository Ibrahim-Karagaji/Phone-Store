import DisplayPeoducts from "./DisplayPeoducts"
import { products } from "./App";
import { useContext } from "react";
export default function PhoneCards() {
  return (
    <div className="flex flex-col gap-5">
      <DisplayPeoducts />
      <DisplayPeoducts />
    </div>
  );
}
