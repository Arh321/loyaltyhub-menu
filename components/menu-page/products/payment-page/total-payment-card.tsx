"use client";
import { RootState } from "@/app/store/store";
import { Button } from "antd";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import PriceCurrency from "../../price-currency";

const TotoalPaymentCard = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const isOpen = useState(true);

  //   useEffect(() => {}, []);
  return (
    <div className=" rounded-lg p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] text-base">
      <div className="flex flex-col justify-between gap-2 items-center ">
        <div className="flex gap-1 self-start">
          <span>مبلغ پرداختی:</span>
          <PriceCurrency price={cart.totalAmount} />
        </div>
        <div></div>
        {isOpen ? (
          <div className="flex items-center gap-2  max-w-full">
            <FaCircle />
            <p className="text-center  line-clamp-2">
              لطفا سفارش خود را به متصدی ثبت سفارش یا مجموعه اطلاع دهید.
            </p>
            <FaCircle />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 max-w-[60%]">
              <FaCircle />
              <p className="text-center ">
                متاسفانه مجموعه در حال حاضر بسته است و قادر به دریافت سفارش
                نمیباشد.
              </p>
              <FaCircle />
            </div>
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
