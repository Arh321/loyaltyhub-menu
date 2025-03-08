import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/api/digital-menu/api";

const fetchProducts = async (
  category_id?: number,
  product_id?: number,
  name?: string
) => {
  const { data } = await apiClient.get(`/products/`, {
    params: { category_id, product_id, name }, // ✅ ارسال `product_id` به API (در صورت وجود)
  });

  return JSON.parse(JSON.stringify(data)); // ✅ تبدیل به Plain Object
};

export const useProducts = (
  category_id?: number,
  product_id?: number,
  name?: string
) => {
  return useQuery({
    queryKey: ["products", category_id, product_id, name], // ✅ اضافه کردن `product_id` به queryKey
    queryFn: () => fetchProducts(category_id, product_id, name),
    enabled: true, // ✅ اگر category_id مقدار داشته باشد، کوئری اجرا شود
    staleTime: 1000 * 60 * 5, // کش ۵ دقیقه‌ای
  });
};
