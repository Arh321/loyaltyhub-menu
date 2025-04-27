"use client";
import dynamic from "next/dynamic";
import MenuListLoader from "./menu-list-loader";

const LazyMenuListMapItems = dynamic(() => import("./menu-list-map"), {
  ssr: false,
  loading: () => <MenuListLoader />,
});

export default LazyMenuListMapItems;
