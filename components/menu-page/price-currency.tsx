import React from "react";

const PriceCurrency = ({ price }: { price: number }) => {
  return (
    <div className="flex gap-1 items-center">
      <span>{price}</span>
      <span>تومان</span>
    </div>
  );
};

export default PriceCurrency;
