import { useParams } from "next/navigation";
import { useMenus } from "./useMenus";

import { useEffect, useMemo, useState } from "react";
import { Category } from "@/types/menu/menu-types";

const useManageProducts = () => {
  const { depId } = useParams();

  const { data, isLoading, isError, refetch, isRefetching } = useMenus(
    Number(depId)
  );

  const menus = useMemo(() => {
    return [...(data?.result?.filter((menu) => menu.menu_id !== null) ?? [])];
  }, [data]);

  const [selectedMenu, setSelectedMenu] = useState<number | null>(() => {
    const storedMenuId = localStorage.getItem("selectedMenuId");
    if (!storedMenuId || !menus) return null;
    const menu = menus?.find((menu) => menu.menu_id === Number(storedMenuId));
    return menu?.menu_id || null;
  });

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    () => {
      if (!selectedMenu) return null;
      const menu = menus?.find((menu) => menu.menu_id === selectedMenu);
      return menu?.categories[0] ?? null;
    }
  );

  useEffect(() => {
    if (selectedMenu) {
      setSelectedCategory(
        menus?.find((menu) => menu.menu_id === selectedMenu)?.categories[0] ??
          null
      );
    }
  }, [selectedMenu]);

  return {
    menus,
    selectedMenu,
    setSelectedMenu,
    isLoading,
    isError,
    refetch,
    isRefetching,
    selectedCategory,
    setSelectedCategory,
  };
};

export default useManageProducts;
