import { apiClient } from "./api";

export const fetchMenuByBranch = async (branchId: number) => {
  try {
    const response = await apiClient.get(`/api/menu/?branch_id=${branchId}`);

    // تبدیل داده دریافتی به JSON و بازگرداندن آن به عنوان Plain Object
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    console.error("خطا در دریافت منو:", error);
    throw error;
  }
};
