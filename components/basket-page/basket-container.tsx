"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import BasketProductList from "./basket-product-list";
import TotalPaymentCard from "./total-payment-card";
const BasketContainer = () => {
  const { basket } = useSelector((state: RootState) => state.basket);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-4 max-h-[330px] overflow-y-auto">
        {basket.map((product, index) => (
          <BasketProductList key={index} product={product} />
        ))}
      </div>
      <div className="w-full fixed bottom-0 left-0 right-0 bg-light-background h-max">
        <TotalPaymentCard />
      </div>
    </div>
  );
};

export default BasketContainer;
