"use client";
import { useProducts } from "@/app/hooks/useProducts";
import SeeCart from "@/components/menu-page/buttons/see-cart-button";
import SeeShopMenu from "@/components/menu-page/buttons/see-shop-menu";
import CartButtons from "@/components/menu-page/cart/cart-buttons";
import PriceCurrency from "@/components/menu-page/price-currency";
import { Spin } from "antd";
import Image from "next/image";
// import { useParams } from "next/navigation";
import React from "react";
// import { useSelector } from "react-redux";
const ProductPropertiesPage = ({ params }: { params: { id: string } }) => {
  const {
    data: product,
    isLoading,
    error,
  } = useProducts(null, Number(params.id));

  if (isLoading) return <Spin />;
  else if (error) return <span>{error.message}</span>;
  return (
    <div className="flex flex-col gap-2 items-center  mx-auto h-screen w-full">
      <div className="w-full">
        <Image
          src="/images/hamburger-test.webp"
          width={70}
          height={70}
          alt="product name"
          className="rounded-lg object-cover w-full fade-image aspect-video"
          loading="lazy"
        />
      </div>
      <h2 className="font-Yekan-Bold text-xl">{product?.data[0]?.name}</h2>
      <div className="flex justify-between w-full p-4">
        <div className="w-[100px]">
          <div className="w-[100px]">
            <CartButtons product={product?.data[0]} />
          </div>
        </div>
        <div className="mt-2 text-md font-semibold ">
          <PriceCurrency price={product?.data[0]?.price} />{" "}
        </div>
      </div>
      <div className="self-start text-gray-500">
        {product?.data[0]?.description}
      </div>
      <div className="flex justify-between gap-2 fixed bottom-8 mx-auto  px-2 w-full ">
        <SeeShopMenu />
        <SeeCart />
      </div>
    </div>
  );
};

export default ProductPropertiesPage;
