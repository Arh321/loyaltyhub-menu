import { Category } from "@/types/menu/menu-types";
import clsx from "clsx";
import { useMemo, useRef } from "react";
interface ICategoriesSectionContainerProps {
  categories: Category[];
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category) => void;
}

const CategoriesSectionContainer = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: ICategoriesSectionContainerProps) => {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    const categoryElement = categoriesRef.current?.querySelector(
      `[data-category-id="${category.category_id}"]`
    );
    if (categoryElement) {
      categoryElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => category.category_id !== null);
  }, [categories]);

  return (
    <div
      ref={categoriesRef}
      className="w-full overflow-x-auto scrollbar-hide sm-scrollbar"
    >
      <div className="w-full flex items-center  gap-4 px-6 pb-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div
              onClick={() => handleCategoryClick(category)}
              key={category.category_id}
              data-category-id={category.category_id}
              className={clsx(
                "w-max h-10 bg-light-secondary text-sm shadow-md text-light-secondary-text rounded-lg px-4 py-1 whitespace-nowrap flex items-center justify-center cursor-pointer",
                selectedCategory?.category_id === category.category_id &&
                  "!bg-light-primary text-white"
              )}
            >
              {category.category_name}
            </div>
          ))
        ) : (
          <div className="w-full h-10 flex items-center justify-center text-light-secondary-text">
            داده ای وجود ندارد
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesSectionContainer;
