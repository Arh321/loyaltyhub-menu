"use client";
import React from "react";
import Image from "next/image";
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
  console.log(menu.selectedCategory);
  return (
    <ul
      className="flex overflow-x-auto gap-4 p-2 w-full pb-20  shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.2)]"
      dir="rtl"
    >
      {categories?.map((category: Category) => (
        // <CategoryCard
        //               category={category}
        //               // products={category.products}
        //               key={category.category_id}
        //               imageUrl={"/images/hamburger-test.jpg"}
        //               expand={gridCols == 1}
        //               // height={170}
        //               height={90}
        //               width={180}
        //             />
        <li className="">
          <button
            key={category.category_id}
            onClick={() => {
              dispatch(setMenuData({ selectedCategory: category }));
              localStorage.setItem(
                "selectedCategoryId",
                String(category.category_id)
              );
            }}
            className={`flex flex-col items-center space-y-1  rounded-md `}
          >
            <div
              className={`  ${
                menu.selectedCategory === category ||
                category.category_id ===
                  Number(localStorage.getItem("selectedCategoryId"))
                  ? "w-full border border-black rounded-lg p-1"
                  : "w-full border border-transparent p-1"
              }`}
            >
              <Image
                // src={category.image}
                src={"/images/hamburger-test.webp"}
                alt={"نام دسته بندی"}
                width={80}
                height={80}
                className="rounded-lg !aspect-square object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] text-black font-bold ">
              {category.name}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};
export default CategoryTabs;
