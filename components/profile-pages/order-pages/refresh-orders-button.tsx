import useOrders from "@/app/hooks/useOrders";
import { Button } from "antd";
import React from "react";
import { TbRefresh } from "react-icons/tb";

const RefreshOrdersButton = ({
  onUpdateOrders,
}: {
  onUpdateOrders: () => void;
}) => {
  return (
    <Button
      className="custom-btn-transparent items-center gap-2 p-2  inline-flex max-w-[150px]"
      onClick={onUpdateOrders}
    >
      <TbRefresh />
      <span>به روزرسانی سفارشات</span>
    </Button>
  );
};

export default RefreshOrdersButton;
