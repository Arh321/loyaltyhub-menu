"use client";
import React from "react";
import AddToCart from "../../buttons/add-to-cart";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Image from "next/image";
import PriceCurrency from "../../price-currency";
import ProductCategoryName from "./product-category-name";

const CartProductsList = () => {
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart.items);
  const openHour = 9;
  const closeHour = 23;

  return (
    <div className="flex flex-col justify-between ">
      <ProductCategoryName name="کتگوری محصول/product category" />
      {cart.items.map((item) => (
        <div className="flex justify-between mt-4" key={item.id}>
          <div className="flex gap-4 items-center">
            {/* <Image
              src={item.thumbnail.url}
              width={20}
              height={20}
              className="aspect-square"
            /> */}
            <Image
              src="/images/hamburger-test.jpg"
              width={30}
              height={30}
              className="aspect-square"
              alt={"عکس محصول"}
            />

            <AddToCart product={item} />
            <span>{item.thumbnail.name}</span>
          </div>
          <PriceCurrency price={item.totalPrice} />
        </div>
      ))}
      {/* <div className="flex-1 border-b-4 border-green-300"></div> */}
    </div>
  );
};

export default CartProductsList;
