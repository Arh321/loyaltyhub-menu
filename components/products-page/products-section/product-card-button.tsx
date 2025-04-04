import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  decrementQuantity,
  incrementQuantity,
} from "@/redux/basket-slice/basketSlice";
import { Product } from "@/types/menu/menu-types";
import { RootState } from "@/redux/store";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { Icon } from "@iconify/react/dist/iconify.js";
interface IProductCardButtonProps {
  product: Product;
}
const ProductCardButton = ({ product }: IProductCardButtonProps) => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const productInBasket = basket.find((item) => item.id === product.id);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[40px] flex items-center justify-center">
      {!productInBasket ? (
        <CTAButton
          onClick={() => dispatch(addToBasket({ ...product, quantity: 1 }))}
          className="w-full h-max !bg-transparent !border border-light-primary !text-light-primary text-sm p-[2px]"
        >
          <Icon icon="basil:plus-outline" width="24" height="24" />
          <span>افزودن</span>
        </CTAButton>
      ) : (
        <div className="w-full justify-between flex items-center gap-2">
          <CTAButton
            className="text-sm p-[2px] w-max h-max border border-light-primary !text-light-primary !bg-transparent"
            onClick={() => dispatch(incrementQuantity({ id: product.id }))}
          >
            <Icon icon="basil:plus-outline" width="24" height="24" />
          </CTAButton>
          <span>{productInBasket.quantity}</span>
          <CTAButton
            className="text-sm p-[2px] w-max h-max border border-light-primaryText text-light-primaryText !bg-transparent"
            onClick={() => dispatch(decrementQuantity({ id: product.id }))}
          >
            <Icon icon="jam:minus" width="24" height="24" />
          </CTAButton>
        </div>
      )}
    </div>
  );
};

export default ProductCardButton;
