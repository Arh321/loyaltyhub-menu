import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../lib/api/users/api";
import {
  UpdateUserPayload,
  UpdateUserResponse,
} from "../types/users/update-info";
import { useRouter } from "next/navigation"; // اضافه کردن برای هدایت
import { message } from "antd";

const updateUser = async (
  userData: UpdateUserPayload
): Promise<UpdateUserResponse> => {
  const response = await apiClient.put("/update-user/", userData);
  return response.data;
};

const useUpdateUser = () => {
  const router = useRouter(); // استفاده از `useRouter`

  return useMutation<UpdateUserResponse, Error, UpdateUserPayload>({
    mutationFn: updateUser,
    onSuccess: () => {
      message.success("ویرایش اطلاعات موفقیت آمیز بود");
      router.push("/menu/1/products"); // هدایت پس از موفقیت
    },
    onError: () => {
      message.error("ویرایش اطلاعات ناموفق بود");
      // Alert(<span>ویرایش اطلاعات ناموفق بود</span>);
    },
  });
};

export default useUpdateUser;
