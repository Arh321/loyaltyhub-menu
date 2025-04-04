import { useParams } from "next/navigation";
import { useMenus } from "./useMenus";

import { useEffect, useMemo, useState } from "react";
import { Category, IMenu } from "@/types/menu/menu-types";
import { exampleMenu } from "@/components/departments-page/departments-image-data";
const useManageProducts = () => {
  const { depId } = useParams();

  const { data, isLoading, isError, refetch, isRefetching } = useMenus(
    Number(depId)
  );

  const menus = useMemo(() => {
    return [
      exampleMenu,
      ...(data?.result?.filter((menu) => menu.menu_id !== null) ?? []),
    ];
  }, [data]);

  const [selectedMenu, setSelectedMenu] = useState<IMenu | null>(() => {
    const storedMenuId = localStorage.getItem("selectedMenuId");
    if (!storedMenuId || !menus) return null;
    return menus?.find((menu) => menu.menu_id === Number(storedMenuId)) || null;
  });

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    selectedMenu?.categories[0] ?? null
  );

  useEffect(() => {
    if (selectedMenu) {
      setSelectedCategory(selectedMenu.categories[0]);
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
