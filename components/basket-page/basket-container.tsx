"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import BasketProductList from "./basket-product-list";
import TotalPaymentCard from "./total-payment-card";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import BasketPaymentPreview from "./basket-payment-preview";
const BasketContainer = () => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { depId } = useParams();
  const router = useRouter();

  const handleBack = () => {
    router.push(`/departments/${depId}/products`);
  };

  useEffect(() => {
    if (basket.length === 0) {
      handleBack();
    }
  }, [basket.length]);

  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4 max-h-[330px] overflow-y-auto">
        {basket.map((product, index) => (
          <BasketProductList key={index} product={product} />
        ))}
      </div>
      <div className="w-full bg-light-background h-max">
        <BasketPaymentPreview />
      </div>
      <div className="w-full fixed bottom-0 left-0 right-0 bg-light-background h-max">
        <TotalPaymentCard />
      </div>
    </div>
  );
};

export default BasketContainer;
