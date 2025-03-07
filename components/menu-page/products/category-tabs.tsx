"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setMenuData } from "@/app/store/menuSlice";
import { RootState } from "@/app/store/store";
import { Category } from "@/app/types/categories";

const CategoryTabs = ({
  categories,
  selectedCategory,
}: {
  categories: Category[] | undefined;
  selectedCategory: Category | undefined;
}) => {
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.menu);
  console.log(menu.selectedCategory);
  return (
    <div className="flex overflow-x-auto gap-4 p-2 border-b" dir="rtl">
      {categories?.map((category: Category) => (
        <button
          key={category.category_id}
          onClick={() => {
            dispatch(setMenuData({ selectedCategory: category }));
          }}
          className={`flex flex-col items-center space-y-1  rounded-md `}
        >
          <div
            className={`  ${
              menu.selectedCategory === category
                ? "border border-black rounded-lg p-1"
                : "border border-transparent p-1"
            }`}
          >
            <Image
              // src={category.image}
              src={"/images/hamburger-test.jpg"}
              alt={"نام دسته بندی"}
              width={40}
              height={40}
              className="rounded-md !aspect-square "
            />
          </div>
          <span className="text-[10px] font-almarai text-black font-bold ">
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};
export default CategoryTabs;
