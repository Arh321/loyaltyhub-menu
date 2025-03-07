import { useQuery } from "@tanstack/react-query";
import { fetchBranchInfo } from "@/app/lib/api/digital-menu/branches";
import { Main } from "@/app/types/branches/branches";

export const useBranchInfo = (branchId?: number) => {
  return useQuery<Main>({
    queryKey: ["branchInfo", branchId], // کش کردن اطلاعات شعبه با توجه به ID
    queryFn: () => fetchBranchInfo(branchId), // فراخوانی API
    enabled: !!branchId, // اگر branchId مقدار نداشته باشد، اجرا نمی‌شود
    staleTime: 60 * 1000, // داده‌ها تا ۶۰ ثانیه کش شوند
  });
};
