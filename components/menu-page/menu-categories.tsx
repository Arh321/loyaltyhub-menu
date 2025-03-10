"use client";

import CategoryCard from "./category-card";
import clsx from "clsx";
import { RootState } from "@/app/store/store";
import { useCategories } from "@/app/hooks/useCategories";
import { useProducts } from "@/app/hooks/useProducts";
import { useSelector } from "react-redux";

export default function MenuCategories({}: {}) {
  const menu = useSelector((state: RootState) => state.menu);

  const { data: categories, isLoading, error } = useCategories();
  const { data: products } = useProducts();
  console.log(products);
  if (isLoading) return <p>⏳ در حال بارگذاری...</p>;
  if (error) return <p className="text-red-500">❌ خطا در دریافت اطلاعات</p>;

  return (
    <>
      {/* کارت‌ها */}
      {categories?.result && categories?.result.length > 0 ? (
        <div
          className={clsx(
            `grid gap-4`,
            menu.gridCols == 1 ? "grid-cols-1" : "grid-cols-2"
          )}
        >
          {categories.result.map((category) => (
            <CategoryCard
              category={category}
              // products={category.products}
              key={category.category_id}
              imageUrl={"/images/hamburger-test.webp"}
              expand={menu.gridCols == 1}
              height={170}
              width={170}
            />
          ))}
        </div>
      ) : (
        <p className=" flex justify-center text-red-500">
          دسته بندی ای وجود ندارد!{" "}
        </p>
      )}
    </>
  );
}
