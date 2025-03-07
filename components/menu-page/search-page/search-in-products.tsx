import { Input } from "antd";
import React from "react";

const SearchInProducts = () => {
  return (
    <div className="flex flex-col gap-4 h-screen ">
      <Input
        placeholder="محصول مورد نظر خود را جست و جو کنید"
        className="font-Yekan-Regular"
      />
    </div>
  );
};

export default SearchInProducts;
