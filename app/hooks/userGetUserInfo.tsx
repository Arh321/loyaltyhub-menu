import { useMutation, useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/api/users/api";
import {
  UpdateUserPayload,
  UpdateUserResponse,
} from "../types/users/update-info";
import { useRouter } from "next/navigation"; // اضافه کردن برای هدایت
import { message } from "antd";
import { Main } from "../types/users/create-user";

const updateUser = async (userData: UpdateUserPayload): Promise<Main> => {
  const response = await apiClient.put("/create-user/", userData);
  return response.data;
};

const useGetUserInfo = () => {
  const router = useRouter(); // استفاده از `useRouter`
  return useQuery({
    queryKey: ["user-info"], // ✅ کلید کش برای جلوگیری از درخواست‌های تکراری
    queryFn: updateUser,
    staleTime: 1000 * 60 * 5, // ✅ کش به مدت ۵ دقیقه معتبر است
    refetchOnWindowFocus: false, // ✅ هنگام فوکوس مجدد، دوباره درخواست نزند
  });
};

export default useGetUserInfo;
