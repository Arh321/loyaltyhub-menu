"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import SeeCart from "./menu-page/buttons/see-cart-button";
import PriceCurrency from "./menu-page/price-currency";
import { notification } from "antd";
import { usePathname } from "next/navigation";

const CartNotification: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const { totalQuantity, totalAmount } = useSelector(
    (state: RootState) => state.cart
  );

  const path = usePathname(); // مسیر کامل URL

  const openNotification = () => {
    api.open({
      message: "",
      description: (
        <div className="bg-green-600 text-white p-2 rounded-lg flex justify-between items-center shadow-lg">
          <SeeCart />
          <PriceCurrency price={totalAmount} />
        </div>
      ),
      duration: 0,
      placement: "bottom",
    });
  };
  const closeNotification = () => {
    return null;
    api.destroy();
  };

  const isMatchProduct = /^\/menu\/\d+\/products\/\d+$/.test(path);
  const isMatchPayment = /^\/menu\/\d+\/payment$/.test(path);

  if (isMatchProduct || isMatchPayment) {
    closeNotification();
  }

  if (totalQuantity === 0) {
    closeNotification();
    return null;
  } else if (totalQuantity === 1) {
    openNotification();
  }
  return (
    <div className="fixed bottom-4 left-4 right-4 bg-[#005b4c] text-white px-4 py-2 rounded-lg flex justify-between items-center shadow-lg max-w-[570px] mx-auto transition-all">
      <SeeCart />
      <PriceCurrency price={totalAmount} />
    </div>
  );
};
export default CartNotification;
