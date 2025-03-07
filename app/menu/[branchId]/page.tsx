"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchBranchInfo } from "@/app/lib/api/digital-menu/branches";
import { Main as BranchMain } from "@/app/types/branches/branches";
import MenuCategories from "@/components/menu-page/menu-categories";
export default function MenuPage() {
  const { branchId } = useParams();

  const [gridCols, setGridCols] = useState(2); // تعداد ستون‌ها
  const [branchName, setBranchName] = useState<string>("");
  // const [branchLoading, setBranchLoading] = useState<boolean>(false);
  // const [branchError, setBranchError] = useState<boolean>(false);

  useEffect(() => {
    if (!branchId) return;
    // setBranchLoading(true);
    fetchBranchInfo(Number(branchId)).then((data: BranchMain) => {
      if (data.status === "success") {
        setBranchName(data.result[0].name);
      } else {
        throw new Error(data.message || "دریافت نام با مشکل مواجه شد");
      }
    });
    // .catch((err) => setBranchError(err.message));
    // .finally(() => setBranchLoading(false));
  }, [branchId]);
  return (
    <div className="min-h-screen overflow-auto   text-center ">
      <MenuCategories gridCols={gridCols} branchId={branchId} />
    </div>
  );
}
