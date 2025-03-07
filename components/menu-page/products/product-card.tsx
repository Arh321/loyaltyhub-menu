import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setMenuData } from "@/app/store/menuSlice";
import { useRouter } from "next/navigation";
import AddToEmptyCart from "../buttons/add-to-empty-cart";
import AddToCart from "../buttons/add-to-cart";
import PriceCurrency from "../price-currency";
import { Product } from "@/app/types/products/products";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  const handleSelectProduct = () => {
    dispatch(setMenuData({ selectedProduct: product }));
    router.push(window.location.pathname + `/${product.product_id}`);
  };
  return (
    <div
      className="flex flex-col font-almarai text-sm text-black bg-green-200 p-3 gap-6 rounded-lg shadow-md w-full "
      dir="rtl"
      onClick={handleSelectProduct}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-2">
          <Image
            // src={product.thumbnail.url} در api اضافه شود
            src="/images/hamburger-test.jpg"
            alt={"عکس محصول"}
            width={100}
            height={100}
            className="rounded-md aspect-square"
          />
          <h3 className="font-bold">{product.name}</h3>
        </div>
        <p className="text-sm text-gray-600">
          {/* {product?.titleEn} در api اضافه شود */}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between gap-3 items-center w-[30%]">
          {cart.items.some(
            (product1) => product1.product_id === product?.product_id
          ) ? (
            <AddToCart product={product} />
          ) : (
            <AddToEmptyCart product={product} />
          )}
        </div>
        <PriceCurrency price={product.price} />
      </div>
    </div>
  );
};
export default ProductCard;
