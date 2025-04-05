import { RootState } from "@/redux/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const BasketPaymentPreview = () => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const [open, setOpen] = useState(false);
  const basketInfo = useMemo(() => {
    return {
      totalPrice: basket.reduce((acc, curr) => acc + curr.price, 0),
      totalQuantity: basket.reduce((acc, curr) => acc + curr.quantity, 0),
      totalVat: basket.reduce((acc, curr) => acc + curr.discount, 0),
    };
  }, [basket]);

  return (
    <div
      style={{ transform: open ? "translateY(0)" : "translateY(100%)" }}
      className="w-full flex flex-col gap-4"
    >
      <div
        onClick={() => setOpen(!open)}
        className="bg-light-secondary w-max px-2 py-1 rounded-t-lg"
      >
        {open ? "کمتر" : "بیشتر"}
        <span className="text-light-primary">
          <Icon
            icon="mingcute:up-line"
            width="24"
            height="24"
            className={`${open ? "rotate-180" : ""}`}
          />
        </span>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <span>تعداد اقلام</span>
          <span>{basketInfo.totalQuantity}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span>مجموع سفارش</span>
          <span>{basketInfo.totalPrice}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span>مجموع مالیات</span>
          <span>{basketInfo.totalVat}</span>
        </div>
        <hr className="border-dashed border-light-gray" />
        <div className="w-full flex items-center justify-between">
          <span>مجموع قابل پرداخت</span>
          <span>{basketInfo.totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketPaymentPreview;
