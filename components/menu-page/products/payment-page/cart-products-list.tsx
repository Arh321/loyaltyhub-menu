"use client";
import React from "react";
import AddToCart from "../../buttons/add-to-cart";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Image from "next/image";
import PriceCurrency from "../../price-currency";
import ProductCategoryName from "./product-category-name";
import { useRouter } from "next/navigation";

const CartProductsList = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  if (cart.totalQuantity === 0) router.back();
  console.log(cart.items);
  const openHour = 9;
  const closeHour = 23;
  const groupedItems = cart.items.reduce((acc, item) => {
    const categoryId = item.category_id; // دسته‌بندی محصول
    if (!acc[categoryId]) {
      acc[categoryId] = {
        categoryName: item.categoryName, // نام دسته
        products: [],
      };
    }
    acc[categoryId].products.push(item);
    return acc;
  }, {} as Record<string, { categoryName: string; products: typeof cart.items }>);

  return (
    <div className="flex flex-col justify-between h-[20vh] overflow-y-auto">
      {Object.values(groupedItems).map((group) => (
        <div key={group.categoryName}>
          {/* نام دسته‌بندی */}
          <ProductCategoryName
            isLoadingCatName={false}
            name={group.categoryName}
          />

          {/* لیست محصولات زیر دسته‌بندی */}
          {group.products.map((item) => (
            <div className="flex justify-between mt-4" key={item.product_id}>
              <div className="flex gap-4 items-center">
                <Image
                  src="/images/hamburger-test.webp"
                  width={30}
                  height={30}
                  className="aspect-square"
                  alt={"عکس محصول"}
                />
                <AddToCart product={item} />
                <span className="whitespace-nowrap">{item.name}</span>
              </div>
              <PriceCurrency price={item.totalPrice} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CartProductsList;
