import { Skeleton } from "antd";
import React from "react";

const ProductCategoryName = ({
  name,
  isLoadingCatName,
}: {
  name?: string;
  isLoadingCatName: boolean;
}) => {
  return (
    <div className="flex items-center justify-center w-full py-4">
      {isLoadingCatName ? (
        <Skeleton active />
      ) : (
        <div className="relative flex items-center w-full">
          {/* خط محو شونده سمت چپ */}
          <div className="flex-1 h-[1px] bg-black"></div>
          {/* متن وسط */}
          <span className="mx-6 text-base font-Yekan-regular whitespace-nowrap text-[#4b4b4d] ">
            {name}
          </span>
          <div className="flex-1 h-[1px] bg-black"></div>

          {/* خط محو شونده سمت راست */}
        </div>
      )}
    </div>
  );
};

export default ProductCategoryName;
