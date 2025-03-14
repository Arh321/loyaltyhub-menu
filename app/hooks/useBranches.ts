import { useQuery } from "@tanstack/react-query";
import { fetchBranchInfo } from "@/app/lib/api/digital-menu/branches";
import { Main } from "@/app/types/branches/branches";

export const useBranchInfo = (branchId?: number, branchName?: string) => {
  return useQuery<Main>({
    queryKey: ["branchInfo", branchId, branchName], // کش کردن اطلاعات شعبه با توجه به ID
    queryFn: () => fetchBranchInfo(branchId, branchName), // فراخوانی API
    enabled: true,
    staleTime: 60 * 1000, // داده‌ها تا ۶۰ ثانیه کش شوند
    gcTime: 1000 * 60 * 30,
  });
};
