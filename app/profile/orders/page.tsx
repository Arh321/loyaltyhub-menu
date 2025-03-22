"use client";
import useOrders from "@/app/hooks/useOrders";
import MyOrders from "@/components/profile-pages/order-pages/my-orders";
import RefreshOrdersButton from "@/components/profile-pages/order-pages/refresh-orders-button";
import { Spin } from "antd";
import React, { useState } from "react";

const MyOrdersPage = () => {
  const { data: orders, refetch, isLoading, error } = useOrders();
  const updateOrders = () => {
    refetch();
  };
  return (
    <div className="flex flex-col gap-4">
      <RefreshOrdersButton onUpdateOrders={updateOrders} key={1} />
      <MyOrders>
        {isLoading ? (
          <Spin />
        ) : error ? (
          <span className="text-red-600 font-Yekan-Regular">
            {error.message}
          </span>
        ) : (
          { orders }
        )}
      </MyOrders>
    </div>
  );
};

export default MyOrdersPage;
