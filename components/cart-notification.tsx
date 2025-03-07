"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "@/app/store/store";

const CartNotification: React.FC = () => {
  const { totalQuantity, totalAmount } = useSelector(
    (state: RootState) => state.cart
  );
  const router = useRouter();
  const path = window.location.pathname; // مسیر کامل URL
  const { branchId } = useParams();
  // بررسی اینکه مسیر مطابق الگوی /menu/:menuId/products/:productId است
  const isMatchProduct = /^\/menu\/\d+\/products\/\d+$/.test(path);
  const isMatchPayment = /^\/menu\/\d+\/payment$/.test(path);

  if (totalQuantity === 0 || isMatchProduct || isMatchPayment) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-green-500 text-white p-3 rounded-lg flex justify-between items-center shadow-lg">
      <button
        className="bg-white text-green-600 px-4 py-1 rounded-md"
        onClick={(e) => {
          router.push(`/menu/${branchId}/payment`);
          e.stopPropagation();
        }}
      >
        مشاهده سبد
      </button>
      <span>{totalAmount.toLocaleString()} تومان</span>
    </div>
  );
};
export default CartNotification;
