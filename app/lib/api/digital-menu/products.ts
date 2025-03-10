import { Main } from "@/app/types/products/products";
import { apiClient } from "./api";

export const fetchProducts = async (
  category_id?: number,
  product_id?: number,
  name?: string
) => {
  const { data } = await apiClient.get<Main>("/products/", {
    params: { category_id, product_id, name },
  });

  return data;
};
