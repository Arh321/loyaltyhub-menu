import { apiClient } from "./apiConfig";

// export const getCompanies = async () => {
//   const response = await axios.get(
//     "https://dashboardapi.loyaltyhub.ir/digital-menu/Company/list/"
//   );
// };

export const getCompanies = async () => {
  const response = await apiClient.get("/Company/list/");
  return response.data;
};
