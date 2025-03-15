import { useProducts } from "@/app/hooks/useProducts";
import { useParams } from "next/navigation";
import React from "react";

const SingleProductName = () => {
  const productId = useParams();

  const {
    data: products,
    isLoading,
    error,
  } = useProducts(undefined, Number(productId.id));

  return <div className="">{products?.data[0]?.name}</div>;
};

export default SingleProductName;
