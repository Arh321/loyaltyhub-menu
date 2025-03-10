"use client";
import { addItem, removeItem } from "@/app/store/cartSlice";
import { RootState } from "@/app/store/store";
import { Product } from "@/app/types/products/products";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddToCart = ({ product }: { product: Product | null | undefined }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const selectedProduct = cart.items.find(
    (item) => item.product_id === product?.product_id
  );
  return (
    <div className="flex justify-between  items-center w-[100px]">
      <Button
        onClick={(e) => {
          dispatch(addItem({ product: product }));
          e.stopPropagation();
        }}
        className="!p-2  rounded-base hover:!brightness-75 "
      >
        <PlusOutlined />
      </Button>
      <span>{selectedProduct?.quantity}</span>
      <Button
        onClick={(e) => {
          dispatch(removeItem(product?.product_id));
          e.stopPropagation();
        }}
        className="!p-2  rounded-base bg-transparent  hover:!bg-white !border-white hover:!border-white border"
      >
        <MinusOutlined />
      </Button>
    </div>
  );
};

export default AddToCart;
