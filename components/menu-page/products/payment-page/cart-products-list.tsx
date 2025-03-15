"use client";
import React, { useEffect } from "react";
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
  useEffect(() => {
    if (cart.totalQuantity === 0) router.back();
  }, [cart.totalQuantity]);


  const groupedItems = cart.items.reduce(
    (acc, item) => {
      const categoryId = item.category_id; // دسته‌بندی محصول
      if (!acc[categoryId]) {
        acc[categoryId] = {
          categoryName: item.categoryName, // نام دسته
          products: [],
        };
      }
      acc[categoryId].products.push(item);
      return acc;
    },
    {} as Record<string, { categoryName: string; products: typeof cart.items }>
  );

  return (
    <div className="flex flex-col justify-between h-[30vh] scrollableContainer overflow-y-auto text-xs">
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
              <div className="flex gap-4 items-center ">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <Image
                    src="/images/hamburger-test.webp"
                    width={40}
                    height={40}
                    className="aspect-square object-cover"
                    alt={"عکس محصول"}
                  />
                </div>
                <AddToCart product={item} />
                <span className="whitespace-nowrap">{item.name}</span>
              </div>
              <PriceCurrency className="!text-sm" price={item.totalPrice} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CartProductsList;
