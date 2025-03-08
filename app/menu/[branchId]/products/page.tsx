"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "@/app/store/store";
import ProductCard from "@/components/menu-page/products/product-card";
import CategoryTabs from "@/components/menu-page/products/category-tabs";
import ProductCategoryName from "@/components/menu-page/products/payment-page/product-category-name";
import { useProducts } from "@/app/hooks/useProducts";
import { useCategories } from "@/app/hooks/useCategories";
import { Product } from "@/app/types/products/products";

const ProductsPage = () => {
  const menu = useSelector((state: RootState) => state.menu);
  const { branchId } = useParams();

  // ✅ مدیریت category_id برای فراخوانی مجدد محصولات
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    menu?.selectedCategory?.category_id || null
  );

  const { data: products, isLoading: isLoadingPro } =
    useProducts(selectedCategoryId);
  const { data: categories, isLoading: isLoadingCat } = useCategories();

  // ✅ وقتی `selectedCategory` تغییر کرد، مقدار `selectedCategoryId` را آپدیت کن
  useEffect(() => {
    if (menu?.selectedCategory?.category_id) {
      setSelectedCategoryId(menu.selectedCategory.category_id);
    }
  }, [menu?.selectedCategory]);

  return (
    <div className="p-4 bg-[#F0D5B6] h-screen max-w-[570px] mx-auto pb-32">
      <CategoryTabs
        categories={categories?.result}
        selectedCategory={menu?.selectedCategory}
      />

      <ProductCategoryName name={menu?.selectedCategory?.name} />
      <div className="flex flex-col gap-4 overflow-y-auto h-full pb-24">
        {products?.data?.map((product: Product) => (
          <ProductCard product={product} key={product.product_id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
