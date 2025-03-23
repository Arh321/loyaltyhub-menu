"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useCategories } from "@/app/hooks/useCategories";
import { openModal } from "@/app/store/modalSlice";
import CategoryCard from "./category-card";
import clsx from "clsx";
import { Skeleton } from "antd";
import Image1 from "@/public/cats/image-1.webp";
import Image2 from "@/public/cats/image-2.webp";
import Image3 from "@/public/cats/image-3.webp";
import Image4 from "@/public/cats/image-4.webp";
import Image5 from "@/public/cats/image-5.webp";
import Image6 from "@/public/cats/image-6.webp";
import { StaticImageData } from "next/image";

const imageList = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  ,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
];

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
      <div className="w-full h-full grid grid-cols-1">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <div key={index} className="col-span-1 aspect-[16/6]">
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
            `grid gap-4 scrollableContainer animate-fadeIn`,
            menu.gridCols == 1 ? "grid-cols-1" : "grid-cols-2"
          )}
        >
          {categories.result.map((category, index) => (
            <CategoryCard
              category={category}
              key={category.category_id}
              imageUrl={imageList[index] as StaticImageData}
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
