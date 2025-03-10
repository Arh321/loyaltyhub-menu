import React from "react";

const PriceCurrency = ({ price }: { price: number }) => {
  return (
    <div className="flex gap-1 items-center text-lg">
      <span>{price?.toLocaleString("fa")}</span>
      <span>تـومان</span>
    </div>
  );
};

export default PriceCurrency;
