"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useCategories } from "@/app/hooks/useCategories";
import { openModal } from "@/app/store/modalSlice";
import CategoryCard from "./category-card";
import clsx from "clsx";
import { Skeleton } from "antd";

export default function MenuCategories() {
  const menu = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();
  const { data: categories, isLoading, error } = useCategories();

  // اجرای dispatch فقط در اولین ورود به صفحه
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasModalBeenOpened = sessionStorage.getItem("rulesModalOpened");

      if (!hasModalBeenOpened) {
        dispatch(openModal("RulesModal"));
        sessionStorage.setItem("rulesModalOpened", "true");
      }
    }
  }, [dispatch]);

  if (isLoading)
    return (
      <div className="grid gap-4 scrollableContainer grid-cols-1">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <div key={index} className="w-full aspect-[16/3]">
              <Skeleton.Node active className="!w-full !h-full" />
            </div>
          );
        })}
      </div>
    );
  if (error) return <p className="text-red-500">❌ خطا در دریافت اطلاعات</p>;

  return (
    <>
      {/* کارت‌ها */}
      {categories?.result && categories?.result.length > 0 ? (
        <div
          className={clsx(
            `grid gap-4 scrollableContainer`,
            menu.gridCols == 1 ? "grid-cols-1" : "grid-cols-2"
          )}
        >
          {categories.result.map((category) => (
            <CategoryCard
              category={category}
              key={category.category_id}
              imageUrl={"/images/hamburger-test.webp"}
              expand={menu.gridCols == 1}
              height="170px"
            />
          ))}
        </div>
      ) : (
        <p className="flex justify-center text-red-500">
          دسته‌بندی‌ای وجود ندارد!{" "}
        </p>
      )}
    </>
  );
}
