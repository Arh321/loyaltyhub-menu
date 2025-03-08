import { useProducts } from "@/app/hooks/useProducts";
import { useParams } from "next/navigation";
import React from "react";

const SingleProductName = () => {
  const productId = useParams();
  console.log(productId.id);

  const {
    data: products,
    isLoading,
    error,
  } = useProducts(undefined, Number(productId.id));
  console.log(products);
  return <div>{products?.data[0]?.name}</div>;
};

export default SingleProductName;
