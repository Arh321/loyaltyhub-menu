import dynamic from "next/dynamic";
import { DepartmentItemSkeleton } from "../departments-page/department-item-skeleton";

export const CompanyInfoItemLazy = dynamic(
  () => import("./company-info-item"),
  {
    ssr: false,
    loading: () => (
      <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto !rounded-[10px]" />
    ),
  }
);

export const CompanyInfoItemsContainerLazy = dynamic(
  () => import("./company-info-items"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex flex-col items-center gap-2 p-4">
        <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto !rounded-[10px]" />
        <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto !rounded-[10px]" />
        <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto !rounded-[10px]" />
        <DepartmentItemSkeleton parentClass="w-full aspect-[16/3] !h-auto !rounded-[10px]" />
      </div>
    ),
  }
);

export const CompanyPageFooterLazy = dynamic(
  () => import("./company-page-footer"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full grid grid-cols-4 gap-2 p-4">
        <DepartmentItemSkeleton parentClass="w-full col-span-2 !h-[40px] !rounded-[10px]" />
        <DepartmentItemSkeleton parentClass="w-full col-span-2 !h-[40px] !rounded-[10px]" />
      </div>
    ),
  }
);
