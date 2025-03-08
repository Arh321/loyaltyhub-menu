import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/api/digital-menu/api";
import { Main } from "../types/categories";

const fetchCategories = async () => {
  const { data } = await apiClient.get("/categories/");
  return data; // خروجی Plain Object است، پس نیازی به `JSON.stringify` نیست
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"], // کشینگ بر اساس این کلید
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 10, // کش ۱۰ دقیقه‌ای
  });
};
