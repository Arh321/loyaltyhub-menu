import { useProducts } from "@/app/hooks/useProducts";
import { Spin } from "antd";
import { useParams } from "next/navigation";
import React from "react";

const SingleProductName = () => {
  const productId = useParams();

  const {
    data: products,
    isLoading,
    error,
  } = useProducts(null, Number(productId.id));
  if (isLoading) return <Spin />;
  if (error)
    return (
      <span className="font-Yekan-Regular text-red-600">{error.message}</span>
    );
  return <div className="">{products?.data[0]?.name}</div>;
};

export default SingleProductName;
