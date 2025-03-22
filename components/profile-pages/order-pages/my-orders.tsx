import React from "react";

interface Order {}

const MyOrders = ({ children }: { children: Order[] | React.ReactNode }) => {
  return (
    <div className="h-[200px] w-full flex justify-center items-center">
      {Array.isArray(children)
        ? children.length > 0
          ? children
          : "سفارشی موجود نیست"
        : children}
    </div>
  );
};

export default MyOrders;
