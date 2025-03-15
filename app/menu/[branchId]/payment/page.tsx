import CartProductsList from "@/components/menu-page/products/payment-page/cart-products-list";
import TotalPayment from "@/components/menu-page/products/payment-page/total-payment";
import TotoalPaymentCard from "@/components/menu-page/products/payment-page/total-payment-card";
import React from "react";

const PaymentPage = () => {
  return (
    <div className=" w-full  flex flex-col h-[85vh] relative ">
      <CartProductsList />
      <TotalPayment />
      <TotoalPaymentCard />
    </div>
  );
};

export default PaymentPage;
