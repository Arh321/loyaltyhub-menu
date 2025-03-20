"use client";
import { useCategories } from "@/app/hooks/useCategories";
import { addItem } from "@/app/store/cartSlice";
import { Product } from "@/app/types/products/products";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const AddToEmptyCart = ({ product }: { product?: Product }) => {
  const dispatch = useDispatch();
  const { data: category } = useCategories(product?.category_id);
  const categoryName = category?.result[0]?.name;

  return (
    <Button
      variant="filled"
      type="default"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(addItem({ product: product, categoryName: categoryName }));
      }}
      className="flex  gap-2 w-full font-Yekan-Bold text-gray-500 !bg-transparent border border-gray-500 hover:!text-gray-500 hover:!border-gray-500 "
      //   classNames={}
    >
      <PlusOutlined />
      <span className="">افزودن</span>
    </Button>
  );
};

export default AddToEmptyCart;
