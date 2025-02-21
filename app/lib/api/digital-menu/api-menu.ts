import { apiClient } from "./api";
// import {
//   Main,
//   Result,
//   Category,
//   Product,
//   Thumbnail,
// } from "@/app/types/api-menu/menu";

// 📌 دریافت لیست منو (GET)
export const fetchMenuByBranch = async (branchId: number) => {
  try {
    const response = await apiClient.get(`/api/menu/?branch_id=${branchId}`);
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت منو:", error);
    throw error;
  }
};
