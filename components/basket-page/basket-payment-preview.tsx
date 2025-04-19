import { RootState } from "@/redux/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import useClickOutside from "@/hooks/useClickOutside";
import { toPersianCurrency } from "@/utils/numberToRial";

interface BasketPaymentPreviewProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BasketPaymentPreview = ({ open, setOpen }: BasketPaymentPreviewProps) => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { companyVat } = useSelector((state: RootState) => state.company);

  const basketInfo = useMemo(() => {
    const totalPrice = basket.reduce((acc, curr) => acc + curr.price, 0);
    const totalQuantity = basket.reduce((acc, curr) => acc + curr.quantity, 0);
    const totalDiscount = basket.reduce(
      (acc, curr) => acc + (curr.price * curr.discount) / 100,
      0
    );
    const netPrice =
      totalPrice -
      totalDiscount +
      Number(totalPrice - totalDiscount) * (Number(companyVat ?? 0) / 100);

    return {
      totalPrice,
      totalQuantity,
      totalDiscount,
      netPrice,
    };
  }, [basket, companyVat]);

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className={clsx(
        "w-full flex flex-col items-center top-0 right-0 left-0 mx-auto p-4 absolute transition-all duration-500",
        {
          "translate-y-[-46px]": !open,
          "translate-y-[-95%]": open,
        }
      )}
    >
      <div
        onClick={() => setOpen(!open)}
        className="bg-light-secondary  w-[80px] h-[30px] text-light-secondary-text  px-2 py-1 rounded-t-lg flex items-center justify-between"
      >
        {open ? "کمتر" : "بیشتر"}
        <span className="text-light-primary">
          <Icon
            icon="mingcute:up-line"
            width="24"
            height="24"
            style={{
              transition: "transform 0.5s ease-in-out",
              transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
            }}
          />
        </span>
      </div>
      <div className="w-full flex flex-col gap-4 bg-light-secondary rounded-lg p-4">
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">تعداد اقلام</span>
          <span className="text-sm">{basketInfo.totalQuantity}</span>
        </div>
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مجموع سفارش</span>
          <span className="text-sm">
            {toPersianCurrency(basketInfo.totalPrice)}
          </span>
        </div>
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مجموع تخفیف</span>
          <span className="text-sm">
            {toPersianCurrency(basketInfo.totalDiscount)}
          </span>
        </div>
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مالیات بر ارزش افزوده</span>
          <span className="text-sm">%{companyVat}</span>
        </div>
        <hr className="border-dashed border-light-gray" />
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مجموع قابل پرداخت</span>
          <span className="text-sm">
            {toPersianCurrency(basketInfo.netPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasketPaymentPreview;
