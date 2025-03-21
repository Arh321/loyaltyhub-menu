import { setMenuData } from "@/app/store/menuSlice";
import { Category } from "@/app/types/categories/categories";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

interface CategoryCardProps {
  imageUrl: string | null;
  titleEn?: string | null;
  key: number | null;
  expand?: boolean | null;
  className?: string;
  category: Category;
  width?: string;
  height?: string;
  tabs?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  titleEn,
  key,
  expand,
  className,
  category,
  width,
  height,
  tabs,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div
      key={key}
      onClick={() => {
        dispatch(setMenuData({ selectedCategory: category }));

        localStorage.setItem(
          "selectedCategoryId",
          String(category.category_id)
        );
        if (!tabs) {
          router.push(window.location.pathname + "/products");
        }
      }}
      className={`relative max-w-full rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all  duration-300 hover:scale-[1.08] ${className ? className : ""}`}
      style={{
        width: width || undefined,
        height: height || "auto",
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
