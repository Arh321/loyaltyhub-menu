import React from "react";

const PriceCurrency = ({
  price,
  className,
}: {
  price: number;
  className?: string;
}) => {
  return (
    <div
      className={`flex gap-1 items-center text-lg font-Yekan-Light ${className ? className : ""}`}
    >
      <span>{price?.toLocaleString("fa")}</span>
      <span>تـومان</span>
    </div>
  );
};

export default PriceCurrency;
