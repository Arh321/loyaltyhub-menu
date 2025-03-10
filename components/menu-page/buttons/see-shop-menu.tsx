"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const SeeShopMenu = () => {
  const router = useRouter();
  return (
    <Button
      variant="filled"
      type="default"
      className="flex flex-grow font-Yekan-Regular text-lg !py-6 !bg-transparent !border !border-white"
      onClick={() => router.back()}
    >
      مشاهده منو/فروشگاه
    </Button>
  );
};

export default SeeShopMenu;
