import { useEffect, useState } from "react";

export default function useProducts() {
  const [product, setProduct] = useState({
    product: [],
    isLoading: true,
    error: false,
  });
  useEffect(() => {
    fetch("https://phones-api.deno.dev/phones")
      .then((response) => {
        if (response.ok) {
          setProduct((Prey) => ({ ...Prey, isLoading: false }));
          return response.json();
        } else throw new Error("Network response was not ok");
      })
      .then((data) => setProduct((Prey) => ({ ...Prey, product: data })))
      .catch((error) => {
        setProduct((Prey) => ({ ...Prey, error: true }));
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return product;
}
