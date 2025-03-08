"use client";

import { useProducts } from "@/app/hooks/useProducts";
import { RootState } from "@/app/store/store";
import AddToCart from "@/components/menu-page/buttons/add-to-cart";
import AddToEmptyCart from "@/components/menu-page/buttons/add-to-empty-cart";
import SeeCart from "@/components/menu-page/buttons/see-cart-button";
import SeeShopMenu from "@/components/menu-page/buttons/see-shop-menu";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const ProductPropertiesPage = () => {
  const menu = useSelector((state: RootState) => state.menu);
  const cart = useSelector((state: RootState) => state.cart);
  const params = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useProducts(undefined, Number(params.id));

  return (
    <div className="flex flex-col gap-2 items-center max-w-[570px] mx-auto h-screen">
      <div className="w-full">
        <Image
          src="/images/hamburger-test.jpg"
          width={100}
          height={100}
          alt="product name"
          className="rounded-lg object-cover w-full fade-image"
        />
      </div>
      <h2 className="font-Yekan-Bold">{product?.data[0]?.name}</h2>
      <div className="flex justify-between w-full p-4">
        <div className="flex justify-between gap-3 items-center w-[30%]">
          <div className="flex justify-between gap-3 items-center w-[30%]">
            {cart.items.some(
              (product1) =>
                product1.category_id === product?.data[0]?.category_id
            ) ? (
              <AddToCart product={menu?.selectedProduct} />
            ) : (
              <AddToEmptyCart product={menu?.selectedProduct} />
            )}
          </div>
        </div>
        <p className="mt-2 text-md font-semibold ">
          {product?.data[0]?.price} تومان
        </p>
      </div>
      <div className="text-right">{product?.data[0]?.description}</div>
      <div className="flex justify-between gap-2 w-full fixed bottom-8 mx-auto max-w-[570px] px-2 ">
        <SeeShopMenu />

        {cart.totalQuantity > 0 && <SeeCart />}
      </div>
    </div>
  );
};

export default ProductPropertiesPage;
