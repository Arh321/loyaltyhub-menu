"use client";
import { RootState } from "@/app/store/store";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PriceCurrency from "../../price-currency";

const TotoalPaymentCard = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const isOpen = useState(true);

  //   useEffect(() => {}, []);
  return (
    <div className="shadow-lg rounded-lg p-4">
      <div className="flex flex-col justify-between gap-2 items-center">
        <div className="flex gap-1">
          <span>مبلغ پرداختی:</span>
          <PriceCurrency price={cart.totalAmount} />
        </div>
        {isOpen ? (
          <p>لطفا سفارش خود را به متصدی ثبت سفارش یا مجموعه اطلاع دهید.</p>
        ) : (
          <>
            <p>
              متاسفانه مجموعه در حال حاضر بسته است و قادر به دریافت سفارش
              نمیباشد.
            </p>
            <Button variant="filled" type="default">
              ساعات کاری مجموعه
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TotoalPaymentCard;
