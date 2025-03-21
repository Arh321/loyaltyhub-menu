"use client";
import { RootState } from "@/app/store/store";
import { Product } from "@/app/types/products/products";
import React from "react";
import { useSelector } from "react-redux";
import AddToCart from "../buttons/add-to-cart";
import AddToEmptyCart from "../buttons/add-to-empty-cart";

const CartButtons = ({ product }: { product?: Product }) => {
  const cart = useSelector((state: RootState) => state.cart);

  // بررسی کنید آیا محصول در سبد خرید وجود دارد یا خیر
  const isProductInCart = cart.items.some(
    (product1) => product1.product_id === product?.product_id
  );

  // برگرداندن JSX بر اساس شرط
  return (
    <div className="w-[100px]">
      {isProductInCart ? (
        <AddToCart product={product} />
      ) : (
        <AddToEmptyCart product={product} />
      )}
    </div>
  );
};

export default CartButtons;
