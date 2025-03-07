"use client";
import { Input } from "antd";
import React, { useState } from "react";
import { useProducts } from "@/app/hooks/useProducts"; // فرض بر اینکه این hook شما در دسترس است
import ProductCard from "../products/product-card";
import { Product } from "@/app/types/products/products";

const SearchInProducts = () => {
  const [searchTerm, setSearchTerm] = useState("بیبیییسبسیبیسب"); // برای ذخیره کردن ورودی جستجو
  const { data: products, isLoading } = useProducts(
    undefined,
    undefined,
    searchTerm
  ); // ارسال searchTerm به useProducts

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0)
      setSearchTerm(
        e.target.value
      ); // وقتی ورودی تغییر می‌کند، مقدار جستجو به‌روز می‌شود
    else setSearchTerm("jfdkfjlsjflkdsj");
  };

  return (
    <div className="flex flex-col gap-4 h-screen">
      <Input
        placeholder="محصول مورد نظر خود را جست و جو کنید"
        className="font-Yekan-Regular"
        onChange={handleSearchChange} // در هنگام تغییر ورودی این تابع فراخوانی می‌شود
      />

      {/* نمایش محصولات */}
      <div>
        {isLoading ? (
          <div>در حال بارگذاری...</div>
        ) : (
          <div className="flex flex-col gap-4 overflow-y-auto h-full pb-24">
            {products?.data?.map((product: Product) => (
              <ProductCard product={product} key={product.product_id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInProducts;
