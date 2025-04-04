import { Category } from "@/types/menu/menu-types";
import ProductsCard from "./products-card";
import { Suspense } from "react";
import { Spin } from "antd";
interface IProductsSectionContainerProps {
  category: Category[];
  selectedCategory: Category | null;
}

const ProductsSectionContainer = ({
  category,
}: IProductsSectionContainerProps) => {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <Suspense fallback={<Spin />}>
        {category.map((category, index) => (
          <div id={category.category_id?.toString()} key={index}>
            <h2 className="text-2xl font-bold flex items-center gap-2 my-4">
              <div
                style={{
                  background:
                    "linear-gradient(to left, var(--white), transparent)",
                }}
                className=" w-full h-[1px]"
              />
              <span className="text-light-text font-Yekan-Light text-base whitespace-nowrap px-4">
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
              {category.products.map((product, index) => (
                <ProductsCard key={index} product={product} />
              ))}
            </div>
          </div>
        ))}
      </Suspense>
      {category.length === 0 && (
        <div className="w-full flex flex-col gap-4">
          <span className="text-light-text font-Yekan-Light text-base whitespace-nowrap px-4">
            هیچ محصولی یافت نشد
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductsSectionContainer;
