import { setMenuData } from "@/app/store/menuSlice";
// import { Category, Product } from "@/app/types/api-menu/menu";
import { Category } from "@/app/types/categories/categories";
import { Product } from "@/app/types/products/products";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

interface CategoryCardProps {
  imageUrl: string | null;
  titleEn?: string | null;
  key: number | null;
  expand?: boolean | null;
  products?: Product[];
  category: Category;
  width?: number;
  height?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  titleEn,
  key,
  expand,
  products,
  category,
  width,
  height,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(category);
  return (
    <div
      key={key}
      onClick={() => {
        // dispatch(
        setMenuData({ selectedCategory: category });
        // );
        localStorage.setItem(
          "selectedCategoryId",
          String(category.category_id)
        );

        router.push(window.location.pathname + "/products");
      }}
      className={`relative max-w-full rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all  duration-300 hover:scale-[1.02] `}
      style={{
        height: height ? height : "auto", // If height is defined, use it; otherwise, use 'auto'
      }}
    >
      {/* تصویر پس‌زمینه */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      {/* لایه تاریک (Overlay) */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* متن‌ها */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2
          className={`${expand ? "text-2xl" : "text-lg"} text-white font-bold`}
        >
          {category.name}
          {/* {titleFa} */}
        </h2>
        <p className="text-white text-sm mt-2">{titleEn}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
