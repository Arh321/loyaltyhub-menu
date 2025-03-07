"use client";
import { addItem } from "@/app/store/cartSlice";
import { Product } from "@/app/types/api-menu/menu";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const AddToEmptyCart = ({
  product,
}: {
  product: Product | null | undefined;
}) => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="filled"
      type="default"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(addItem(product));
      }}
      className="flex justify-between gap-2"
      //   classNames={}
    >
      <PlusOutlined />
      <span>افزودن</span>
    </Button>
  );
};

export default AddToEmptyCart;
