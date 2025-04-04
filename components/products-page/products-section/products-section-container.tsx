import { Category } from "@/types/menu/menu-types";
import ProductsCard from "./products-card";
import { useEffect } from "react";
interface IProductsSectionContainerProps {
  category: Category[];
  selectedCategory: Category | null;
}

const ProductsSectionContainer = ({
  category,
  selectedCategory,
}: IProductsSectionContainerProps) => {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      {category.map((category) => (
        <div id={category.category_id?.toString()} key={category.category_id}>
          <h2 className="text-2xl font-bold flex items-center gap-2 my-4">
            <div
              style={{
                background:
                  "linear-gradient(to left, var(--white), transparent)",
              }}
              className=" w-full h-[1px]"
            />
            <span className="text-light-text font-Yekan-Light text-base whitespace-nowrap">
              {category.category_name}
            </span>
            <div
              style={{
                background:
                  "linear-gradient(to right,  var(--white), transparent)",
              }}
              className=" w-full h-[1px]"
            />
          </h2>
          <div className="w-full flex flex-col gap-4">
            {category.products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSectionContainer;
