import { setMenuData } from "@/app/store/menuSlice";
import { Category } from "@/app/types/categories/categories";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

interface CategoryCardProps {
  imageUrl: StaticImageData | string | null;
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
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageUrl ?? ""}
          alt={category.name}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* لایه تاریک (Overlay) */}
      <div className="absolute inset-0 bg-[rgb(0,0,0,0.5)]"></div>

      {/* متن‌ها */}
      <div
        style={{
          background: "linear-gradient(to left,rgb(0,0,0,0.8),transparent)",
        }}
        className="absolute right-0 bottom-5 flex flex-col items-center justify-center text-center px-4"
      >
        <h2
          className={`${expand ? "text-lg" : "text-sm"} text-[#CDC8C8] font-regular`}
        >
          {category.name}
          {/* {titleFa} */}
        </h2>
        <p className="text-[#CDC8C8] text-sm mt-2 font-serif">
          {titleEn ?? "English Title"}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
