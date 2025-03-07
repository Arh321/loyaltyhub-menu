"use client";
import { RootState } from "@/app/store/store";
import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import { useParams, useRouter } from "next/navigation";
const SeeCart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  const { branchId } = useParams();
  return (
    <Button
      type="primary"
      className="flex gap-2 font-Yekan-Regular text-lg !py-6"
      onClick={() => {
        router.push(`/menu/${branchId}/payment`);
      }}
    >
      <Badge count={cart.totalQuantity}></Badge>
      {/* <span className="">{cart.totalQuantity}</span> */}
      <span>مشاهده سبد</span>
    </Button>
    // </Badge>
  );
};

export default SeeCart;
