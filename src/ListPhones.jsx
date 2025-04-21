import { filtersStateContext } from "./FiltersState";
import { useContext } from "react";
export default function ListPhones() {
  const filters = useContext(filtersStateContext);
  return <div></div>;
}
