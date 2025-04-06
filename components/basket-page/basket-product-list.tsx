import { IBasketState } from "@/types/menu/menu-types";
import ImageWithLoader from "../image-with-loader/image-with-loader";
import { departmentsImageData } from "../departments-page/departments-image-data";
import { useMemo } from "react";
import CTAButton from "../shared-components/cta-button/cta-button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  decrementQuantity,
  incrementQuantity,
} from "@/redux/basket-slice/basketSlice";
import { useDispatch } from "react-redux";
interface BasketProductListProps {
  product: IBasketState;
}

const BasketProductList = ({ product }: BasketProductListProps) => {
  const dispatch = useDispatch();
  const image = useMemo(() => {
    return (
      departmentsImageData.find((image) => image.id === product.productId)
        ?.image.src ?? ""
    );
  }, [product.productId]);

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
        <div className="w-full justify-between flex items-center gap-2">
          <CTAButton
            className="text-sm p-[2px] w-max h-max border border-light-primary !text-light-primary !bg-transparent"
            onClick={() =>
              dispatch(incrementQuantity({ id: product.productId }))
            }
          >
            <Icon icon="basil:plus-outline" width="24" height="24" />
          </CTAButton>
          <span>{product.quantity}</span>
          <CTAButton
            className="text-sm p-[2px] w-max h-max border border-light-primaryText text-light-primaryText !bg-transparent"
            onClick={() =>
              dispatch(decrementQuantity({ id: product.productId }))
            }
          >
            <Icon icon="jam:minus" width="24" height="24" />
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default BasketProductList;
