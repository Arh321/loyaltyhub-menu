"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import BasketProductList from "./basket-product-list";
import TotalPaymentCard from "./total-payment-card";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BasketPaymentPreview from "./basket-payment-preview";
import clsx from "clsx";
import CTAButton from "../shared-components/cta-button/cta-button";
const BasketContainer = () => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { depId } = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleBack = () => {
    router.push(`/departments/${depId}/products`);
  };

  useEffect(() => {
    if (basket.length === 0) {
      handleBack();
    }
  }, [basket.length]);

  return (
    <div className="w-full flex flex-col justify-between h-full ">
      <div className="w-full flex flex-col gap-3">
        <div
          className={clsx(
            "flex flex-col gap-4 transition-[height] duration-500 overflow-hidden relative",
            {
              "h-[330px]": !open,
              "h-[200px]": open,
            }
          )}
        >
          <div className="flex flex-col gap-4 overflow-y-auto h-full w-full">
            {basket.map((product, index) => (
              <BasketProductList key={index} product={product} />
            ))}
          </div>
          <div
            style={{
              background:
                "linear-gradient(to top, var(--background-theme), transparent)",
            }}
            className="h-6 absolute bottom-0 left-0 right-0 z-[2]"
          ></div>
        </div>
        <div className="w-full flex flex-col gap-2 px-4">
          <div className="w-full px-4">
            <div className="w-full h-1 border-gradient-primary border-b-2 border-light-primary"></div>
          </div>
          <CTAButton
            onClick={() => router.push(`/departments/${depId}/basket/split`)}
            className="!bg-light-primary-disabled border border-light-primary !p-2 h-max"
          >
            <span className="text-xs whitespace-nowrap">تقسیم دنگی</span>
          </CTAButton>
        </div>
      </div>
      <div className="w-full fixed bottom-0 left-0 right-0 bg-light-background h-max">
        <div className="w-full relative">
          <BasketPaymentPreview open={open} setOpen={setOpen} />

          <TotalPaymentCard />
        </div>
      </div>
    </div>
  );
};

export default BasketContainer;
