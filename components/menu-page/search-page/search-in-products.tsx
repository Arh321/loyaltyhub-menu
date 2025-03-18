"use client";
import { Input, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { useProducts } from "@/app/hooks/useProducts";
import ProductCard from "../products/product-card";
import { Product } from "@/app/types/products/products";

const SearchInProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // ⏳ اعمال debounce برای کاهش تعداد درخواست‌ها
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm.trim() === "" ? "__empty__" : searchTerm);
    }, 500); // ⏳ تاخیر ۵۰۰ میلی‌ثانیه برای ارسال درخواست

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // 📡 درخواست API (وقتی `__empty__` باشه، سرور هیچ چیزی برنمی‌گردونه)
  const { data: products, isLoading } = useProducts(
    undefined,
    undefined,
    debouncedSearch
  );

  return (
    <div className="flex flex-col gap-4 h-screen ">
      <Input
        placeholder="محصول مورد نظر خود را جست و جو کنید"
        className="font-Yekan-Regular bg-transparent py-3 text-gray-500 border border-white rounded-lg !hover:bg-transparent"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* نمایش محصولات */}
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <Spin size="large" />
          </div>
        ) : products?.data?.length === 0 || debouncedSearch === "__empty__" ? (
          <div className="text-gray-400 text-center">محصولی یافت نشد</div>
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
