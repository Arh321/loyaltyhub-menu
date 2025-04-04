import { IBasketState } from "@/types/menu/menu-types";
import ImageWithLoader from "../image-with-loader/image-with-loader";
import { departmentsImageData } from "../departments-page/departments-image-data";
import { useMemo } from "react";
import ProductCardButton from "../products-page/products-section/product-card-button";

interface BasketProductListProps {
  product: IBasketState;
}

const BasketProductList = ({ product }: BasketProductListProps) => {
  const image = useMemo(() => {
    return (
      departmentsImageData.find((image) => image.id === product.id)?.image
        .src ?? ""
    );
  }, [product.id]);

  return (
    <div className="w-full flex items-center justify-between px-4">
      <div className="w-max flex items-center gap-4">
        <div className="size-[50px] rounded-[10px] overflow-hidden">
          <ImageWithLoader
            src={image}
            alt={product.title}
            width={50}
            height={50}
            imageClass=" object-cover"
          />
        </div>
        <div className=" flex flex-col justify-between w-max">
          <span className="text-sm font-Yekan-Medium">{product.title}</span>
          <span className="text-sm font-Yekan-Light text-light-gray">
            {product.price}
            <span className="text-xs font-Yekan-Light text-light-gray pr-1">
              تومان
            </span>
          </span>
        </div>
      </div>
      <div className="w-[100px] ">
        <ProductCardButton product={product} />
      </div>
    </div>
  );
};

export default BasketProductList;
