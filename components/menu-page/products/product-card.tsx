import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setMenuData } from "@/app/store/menuSlice";
import { useRouter } from "next/navigation";
import PriceCurrency from "../price-currency";
import CartButtons from "../cart/cart-buttons";
import { Product } from "@/app/types/products/products";
import clsx from "clsx";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  // استیت برای وضعیت سبد خرید
  const [isInCart, setIsInCart] = useState(false);

  // بررسی اینکه آیا محصول در سبد خرید هست
  useEffect(() => {
    setIsInCart(
      cart.items.some((item) => item.product_id === product.product_id)
    );
  }, [cart.items, product.product_id]);

  const handleSelectProduct = () => {
    dispatch(setMenuData({ selectedProduct: product }));
    router.push(window.location.pathname + `/${product.product_id}`);
  };

  return (
    <div
      className={clsx(
        "flex gap-2 text-sm text-black p-3 rounded-lg shadow-md w-full transition-colors duration-300 font-Yekan-Regular",
        isInCart
          ? "bg-gradient-to-b from-[#fae3ba] to-[#7b8366]"
          : "bg-[#fae3ba]"
      )}
      onClick={handleSelectProduct}
    >
      <div className="flex flex-col gap-2">
        <div className="w-full">
          <Image
            src="/images/khorak-bandari.webp"
            alt="عکس محصول"
            width={100}
            height={100}
            className="rounded-md aspect-square object-cover"
          />
        </div>
        <div className="w-[100px]">
          <CartButtons product={product} />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-2 h-[100px]">
          <div className="font-bold">{product.name}</div>
          <div className="self-end"></div>
          <div className="text-gray-500">{product.description}</div>
        </div>
        <div className="self-end">
          <PriceCurrency price={product.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
