import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProduct] = useState({
    products: [],
    isLoading: true,
    error: false,
  });
  useEffect(() => {
    fetch("http://localhost:7777/phones")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("Network response was not ok");
      })
      .then((data) => {
        setProduct((Prey) => ({ ...Prey, products: data }));
      })
      .catch((error) => {
        setProduct((Prey) => ({ ...Prey, error: true }));
        console.error("There was a problem with the fetch operation:", error);
      })
      .finally(() => {
        setProduct((Prey) => ({ ...Prey, isLoading: false }));
      });
  }, []);
  return products;
}
