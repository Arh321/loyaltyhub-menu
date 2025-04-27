"use client";

import { Suspense, useState } from "react";

import MenusListHeader from "./menus-list-header";
import MenuListItemsContainer from "@/components/menu-page/menu-list-items-container";
import MenuListLoader from "./menu-list-loader";
const MenusContainer = () => {
  const [isGrid, setIsGrid] = useState(false);

  return (
    <div className="w-full grow overflow-y-auto">
      <MenusListHeader isGrid={isGrid} setIsGrid={setIsGrid} />
      <Suspense fallback={<MenuListLoader />}>
        <MenuListItemsContainer isGrid={isGrid} />
      </Suspense>
    </div>
  );
};

export default MenusContainer;
