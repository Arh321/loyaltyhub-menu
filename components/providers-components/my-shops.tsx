"use client";
import React from "react";
import ProvidersCard from "./providers-card";
import { useBranchInfo } from "@/app/hooks/useBranches";
import { Spin } from "antd"; // یا از کتابخانه‌ی دیگری که اسپینر دارید

const MyShops = () => {
  const { data: shops, isLoading, error } = useBranchInfo();

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <div>خطا در دریافت اطلاعات فروشگاه‌ها</div>;
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <span className="self-start w-full text-white">فروشگاه های من</span>
      {shops?.result?.map((shop) => (
        <ProvidersCard
          imageSrc="/images/hamburger-test.webp"
          name={shop.name}
          key={shop.branch_id} // key باید به عنوان prop پاس داده شود
          cardDestination={shop.branch_id}
        />
      ))}
    </div>
  );
};

export default MyShops;
