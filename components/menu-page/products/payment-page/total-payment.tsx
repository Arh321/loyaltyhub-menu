"use client";
import React from "react";
import PriceCurrency from "../../price-currency";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { Divider } from "antd";

const TotalPayment = () => {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div className="flex flex-col w-full font-Yekan-Regular">
      <div className="border-b-4 border-[#fae3bb] my-4"></div>

      <div className="flex w-full whitespace-nowrap items-center gap-2">
        <span>مجموع سفارش</span>
        <div className="border-b border-dashed border-white w-full"></div>
        <PriceCurrency price={cart.totalAmount} />
      </div>
      <div className="flex w-full whitespace-nowrap items-center gap-2">
        <span>مبلغ پرداختی</span>
        <div className="border-b border-dashed border-white w-full"></div>
        <PriceCurrency price={cart.totalAmount} />
      </div>
      <div></div>
    </div>
  );
};

export default TotalPayment;
