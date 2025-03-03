"use client";
import { addItem, removeItem } from "@/app/store/cartSlice";
import { RootState } from "@/app/store/store";
import Button from "@/components/menu-page/products/button";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductPropertiesPage = () => {
  const menu = useSelector((state: RootState) => state.menu);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="max-w-[570px] mx-auto w-full h-screen">
      <div className="w-full">
        <Image
          src="/images/hamburger-test.jpg"
          width={100}
          height={100}
          alt="product name"
          className="rounded-lg object-cover w-full"
        />
      </div>
      <h2>{menu.selectedProduct?.thumbnail.name}</h2>
      <div className="flex justify-between">
        <div className="flex justify-between gap-3 items-center w-[30%]">
          {cart.items.find(
            (product1) => product1.id !== menu.selectedProduct?.id
          ) ? (
            <Button
              className="text-gray-600 flex justify-between items-center gap-2 border rounded-lg border-gray-600 font-bold hover:bg-gray-300 transition-all"
              onClick={() => dispatch(addItem(menu.selectedProduct))}
            >
              <span>+</span>
              <span>افزودن</span>
            </Button>
          ) : (
            <>
              <Button
                onClick={() => dispatch(addItem(menu.selectedProduct))}
                className="p-1 !border rounded-sm"
              >
                +
              </Button>
              <span>{cart.totalQuantity}</span>
              <Button
                onClick={() => dispatch(removeItem(menu.selectedProduct?.id))}
                className="p-1 !border rounded-sm"
              >
                -
              </Button>
            </>
          )}
        </div>
        <p className="mt-2 text-md font-semibold font-almarai">
          {menu.selectedProduct?.price.toLocaleString()} تومان
        </p>
      </div>
    </div>
  );
};

export default ProductPropertiesPage;
