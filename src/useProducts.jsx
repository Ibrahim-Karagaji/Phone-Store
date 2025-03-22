import { useEffect, useState } from "react";

export default function useProducts() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://phones-api.deno.dev/phones")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("Network response was not ok");
      })
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return product;
}
