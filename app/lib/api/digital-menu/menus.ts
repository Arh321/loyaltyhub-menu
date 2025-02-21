// import { apiClient } from "./api";
// import { MenuResponse, MenuItem } from "./types";

// // 📌 دریافت لیست منو (GET)
// export async function fetchMenu(branchId: number): Promise<MenuResponse> {
//   if (!branchId) throw new Error("شناسه شعبه اجباری است");
//   const response = await apiClient.get(`/api/menu/`, {
//     params: { branch_id: branchId },
//   });
//   return response.data;
// }

// // 📌 دریافت یک آیتم خاص از منو (GET)
// export async function fetchMenuItem(itemId: number): Promise<MenuItem> {
//   if (!itemId) throw new Error("شناسه آیتم اجباری است");
//   const response = await apiClient.get(`/api/menu/item/${itemId}`);
//   return response.data;
// }

// // 📌 اضافه کردن آیتم جدید به منو (POST)
// export async function addMenuItem(data: MenuItem): Promise<MenuItem> {
//   const response = await apiClient.post(`/api/menu/item/`, data);
//   return response.data;
// }

// // 📌 بروزرسانی آیتم منو (PUT)
// export async function updateMenuItem(
//   itemId: number,
//   data: Partial<MenuItem>
// ): Promise<MenuItem> {
//   if (!itemId) throw new Error("شناسه آیتم اجباری است");
//   const response = await apiClient.put(`/api/menu/item/${itemId}`, data);
//   return response.data;
// }

// // 📌 حذف یک آیتم منو (DELETE)
// export async function deleteMenuItem(itemId: number): Promise<void> {
//   if (!itemId) throw new Error("شناسه آیتم اجباری است");
//   await apiClient.delete(`/api/menu/item/${itemId}`);
// }
