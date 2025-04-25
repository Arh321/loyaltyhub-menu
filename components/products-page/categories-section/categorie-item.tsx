import ImageWithLoader from "@/components/image-with-loader/image-with-loader";
import { Category } from "@/types/menu/menu-types";
import clsx from "clsx";
import React, { memo } from "react";

interface CategoryItemProps {
  handleCategoryClick: (category: Category) => void;
  category: Category;
  selectedCategory: Category | null;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  handleCategoryClick,
  selectedCategory,
}) => {
  return (
    <div
      onClick={() => handleCategoryClick(category)}
      data-category-id={category.category_id}
      className={clsx(
        "flex flex-col gap-2",
        selectedCategory?.category_id === category.category_id &&
          " [&_.text-sec]:!text-light-primary [&_.text-sec]:!text-sm"
      )}
    >
      <div
        style={{
          boxShadow:
            selectedCategory?.category_id === category.category_id
              ? "0 1px 16px -5px var(--primary)"
              : "",
        }}
        className="size-[70px] rounded-full overflow-hidden image-sec transition-all"
      >
        <ImageWithLoader
          src={""}
          alt={category.category_name ?? ""}
          imageClass="w-full h-full object-cover"
        />
      </div>
      <span className="text-sec w-full max-w-[70px] whitespace-nowrap text-ellipsis overflow-hidden text-center text-xs text-light-secondary-text transition-all">
        {category.category_name}
      </span>
    </div>
  );
};

export default memo(CategoryItem);
