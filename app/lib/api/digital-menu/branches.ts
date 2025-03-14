import { apiClient } from "./api";
import { Main } from "@/app/types/branches/branches";

export const fetchBranchInfo = async (
  branchId?: number,
  branchName?: string
): Promise<Main> => {
  try {
    const queryParams = new URLSearchParams();
    if (branchId) queryParams.append("branch_id", branchId.toString());
    if (branchName) queryParams.append("branch_name", branchName);

    const response = await apiClient.get(
      `/branches/?${queryParams.toString()}`,
      { timeout: 45000 }
    );
    console.log("entered branch");
    // تبدیل داده دریافتی به JSON و بازگرداندن آن به عنوان Plain Object
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    console.error("خطا در دریافت منو:", error);
    throw error;
  }
};
