import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/api/digital-menu/api";
import { Main } from "../types/categories/categories";

const fetchCategories = async (category_id?: number): Promise<Main> => {
  const { data } = await apiClient.get<Main>("/categories/", {
    params: { category_id },
  });
  return data;
};

export const useCategories = (category_id?: number) => {
  return useQuery<Main>({
    queryKey: ["categories", category_id],
    queryFn: () => fetchCategories(category_id),
    staleTime: 1000 * 60 * 10, // کش ۱۰ دقیقه‌ای
    gcTime: 1000 * 60 * 30,
  });
};
