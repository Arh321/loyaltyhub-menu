"use client";
import { addItem, removeItem } from "@/app/store/cartSlice";
import { RootState } from "@/app/store/store";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductPropertiesPage = () => {
  const menu = useSelector((state: RootState) => state.menu);
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  //   console.log(menu.selectedProduct);
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
      <h2>{menu.selectedProduct?.thumbnail.name}</h2>
      <div className="flex justify-between w-full p-2">
        <div className="flex justify-between gap-3 items-center w-[30%]">
          {cart.items.find(
            (product1) => product1.id !== menu.selectedProduct?.id
          ) ? (
            // <Button
            //   className="text-gray-600 flex justify-between items-center gap-2 border rounded-lg border-gray-600 font-bold hover:bg-gray-300 transition-all"
            //   onClick={() => dispatch(addItem(menu.selectedProduct))}
            // >
            //   <span>+</span>
            //   <span>افزودن</span>
            // </Button>
            <Button
              variant="filled"
              type="default"
              onClick={() => dispatch(addItem(menu.selectedProduct))}
              className="flex justify-between gap-2"
              //   classNames={}
            >
              <PlusOutlined />
              <span>افزودن</span>
            </Button>
          ) : (
            <>
              <Button
                variant="filled"
                type="default"
                onClick={() => dispatch(addItem(menu.selectedProduct))}
              >
                <PlusOutlined />
              </Button>
              <span>{cart.totalQuantity}</span>
              <Button
                onClick={() => dispatch(removeItem(menu.selectedProduct?.id))}
                className="!border rounded-sm"
                variant="filled"
                type="default"
              >
                <MinusOutlined />
              </Button>
            </>
          )}
        </div>
        <p className="mt-2 text-md font-semibold ">
          {menu.selectedProduct?.price.toLocaleString()} تومان
        </p>
      </div>
      <div className="flex justify-between gap-2 w-full fixed bottom-8 mx-auto max-w-[570px] px-2 ">
        <Button
          variant="filled"
          type="default"
          className="flex flex-grow font-Yekan-Regular text-lg !py-6 "
        >
          مشاهده منو/فروشگاه
        </Button>
        {/* {cart.totalQuantity > 0 && ( */}
        <Button
          type="primary"
          className="flex gap-2 font-Yekan-Regular text-lg !py-6"
        >
          <span>{cart.totalQuantity}</span>
          <span>مشاهده سبد</span>
        </Button>
        {/* )} */}
      </div>
    </div>
  );
};

export default ProductPropertiesPage;
