import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/api/digital-menu/api";

interface Filters {
  user_id?: number;
  phone_number?: string;
  branch_id?: number;
}

// دریافت داده‌ها از API
const fetchOrders = async ({ queryKey }: { queryKey: [string, Filters?] }) => {
  const [filters = {}] = queryKey; // مقدار پیش‌فرض برای filters
  const { data } = await apiClient.get("/users/orders", { params: filters });
  return data;
};

// هوک سفارشی برای دریافت سفارش‌ها
const useOrders = (filters?: Filters) => {
  return useQuery({
    queryKey: ["orders", filters ?? {}],
    queryFn: fetchOrders,
    enabled:
      !!filters?.user_id || !!filters?.phone_number || !!filters?.branch_id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export default useOrders;
