import { Divider } from "antd";
import React from "react";

const ProductCategoryName = ({ name }: { name: string }) => {
  return (
    // <div className="flex items-center text-center">
    //   <div className="flex-1 border-b border-black"></div>
    //   <span className="mx-2 truncate max-w-32 text-sm">{name}</span>
    //   <div className="flex-1 border-b border-black"></div>
    // </div>
    <>
      <Divider style={{ borderColor: "black" }}>{name}</Divider>
    </>
  );
};

export default ProductCategoryName;
