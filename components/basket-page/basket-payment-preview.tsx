import { RootState } from "@/redux/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import useClickOutside from "@/hooks/useClickOutside";
interface BasketPaymentPreviewProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BasketPaymentPreview = ({ open, setOpen }: BasketPaymentPreviewProps) => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const basketInfo = useMemo(() => {
    return {
      totalPrice: basket.reduce((acc, curr) => acc + curr.price, 0),
      totalQuantity: basket.reduce((acc, curr) => acc + curr.quantity, 0),
      totalVat: basket.reduce((acc, curr) => acc + curr.discount, 0),
    };
  }, [basket]);

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className={clsx(
        "w-full flex flex-col items-center top-0 right-0 left-0 mx-auto p-4 absolute transition-all duration-500",
        {
          "translate-y-[-46px]": !open,
          "translate-y-[-100%]": open,
        }
      )}
    >
      <div
        onClick={() => setOpen(!open)}
        className="bg-light-secondary h-[30px] text-light-secondary-text w-max px-2 py-1 rounded-t-lg flex items-center gap-2"
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
          <span className="text-sm">{basketInfo.totalPrice}</span>
        </div>
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مجموع مالیات</span>
          <span className="text-sm">{basketInfo.totalVat}</span>
        </div>
        <hr className="border-dashed border-light-gray" />
        <div className="w-full flex items-center justify-between text-light-secondary-text">
          <span className="text-sm">مجموع قابل پرداخت</span>
          <span className="text-sm">{basketInfo.totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketPaymentPreview;
