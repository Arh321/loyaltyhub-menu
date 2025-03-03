"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const CartNotification: React.FC = () => {
  const { totalQuantity, totalAmount } = useSelector(
    (state: any) => state.cart
  );
  const router = useRouter();

  if (totalQuantity === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-green-500 text-white p-3 rounded-lg flex justify-between items-center shadow-lg">
      <span>{totalAmount.toLocaleString()} تومان</span>
      <button
        className="bg-white text-green-600 px-4 py-1 rounded-md"
        onClick={() => router.push("/payment")}
      >
        مشاهده سبد
      </button>
    </div>
  );
};
export default CartNotification;
