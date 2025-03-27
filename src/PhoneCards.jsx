import ProductsList from "./ProductsList";

export default function PhoneCards() {
  return (
    <div className="flex flex-col gap-5">
      <ProductsList title="Flagship" filterBy="Flagship" />
      <ProductsList title="Mid Range" filterBy="Mid-range" />
    </div>
  );
}
