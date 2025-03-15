"use client";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuData } from "@/app/store/menuSlice";
import { RootState } from "@/app/store/store";
import { Category } from "@/app/types/categories/categories";
import CategoryCard from "../category-card";

const CategoryTabs = ({
  categories,
  selectedCategory,
}: {
  categories: Category[] | undefined;
  selectedCategory: Category | undefined;
}) => {
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.menu);
  const selectedCategoryRef = useRef<HTMLLIElement>(null);

  // اسکرول به آیتم منتخب هنگام تغییر
  useEffect(() => {
    if (selectedCategoryRef.current) {
      selectedCategoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center", // آیتم منتخب را در وسط صفحه قرار می‌دهد
        inline: "center", // آیتم منتخب را در وسط افقی قرار می‌دهد
      });
    }
  }, [menu.selectedCategory]);

  return (
    <ul
      className="flex overflow-x-auto gap-3 p-2 w-full pb-20 shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.2)] scrollableContainer"
      dir="rtl"
    >
      {categories?.map((category: Category) => (
        <li
          ref={
            menu.selectedCategory === category ||
            category.category_id ===
              Number(localStorage.getItem("selectedCategoryId"))
              ? selectedCategoryRef
              : null
          }
          key={category.category_id}
          onClick={() => {
            dispatch(setMenuData({ selectedCategory: category }));
            localStorage.setItem(
              "selectedCategoryId",
              String(category.category_id)
            );
          }}
        >
          <CategoryCard
            category={category}
            imageUrl={"/images/hamburger-test.webp"}
            expand={false}
            height="80px"
            width="180px"
            key={category.category_id}
            tabs={true}
            className={`${
              menu.selectedCategory === category ||
              category.category_id ===
                Number(localStorage.getItem("selectedCategoryId"))
                ? "scale-[1.08]"
                : ""
            } !text-base !font-Yekan-Regular`}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoryTabs;
