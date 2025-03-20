import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/api/digital-menu/api";
import { Main } from "../types/products/products";

const fetchProducts = async (
  category_id?: number,
  product_id?: number,
  name?: string
) => {
  const { data } = await apiClient.get<Main>("/products/", {
    params: { category_id, product_id, name },
  });

  return data;
};

export const useProducts = (
  category_id: number | null,
  product_id?: number,
  name?: string
) => {
  return useQuery<Main>({
    queryKey: ["products", category_id, product_id, name], // ✅ اضافه کردن `product_id` به queryKey
    queryFn: () => fetchProducts(category_id, product_id, name),
    enabled: true, // ✅ اگر category_id مقدار داشته باشد، کوئری اجرا شود
    staleTime: 1000 * 60 * 5, // کش ۵ دقیقه‌ای
    gcTime: 1000 * 60 * 30, // 30 دقیقه کش در حافظه
  });
};
