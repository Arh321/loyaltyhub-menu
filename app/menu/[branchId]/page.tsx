"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { fetchBranchInfo } from "@/app/lib/api/digital-menu/branches";
import { Main as BranchMain } from "@/app/types/branches/branches";
import MenuCategories from "@/components/menu-page/menu-categories";
import SideBar from "@/components/menu-page/side-bar";
import ReturnKey from "@/components/menu-page/return-key";
import ToggleGrid from "@/components/menu-page/toggle-grid";
import ToggleSidebar from "@/components/menu-page/toggle-sidebar";
export default function MenuPage() {
  const { branchId } = useParams();

  const [gridCols, setGridCols] = useState(2); // تعداد ستون‌ها
  const [sidebarOpen, setSidebarOpen] = useState(false); // باز/بسته بودن سایدبار
  const [branchName, setBranchName] = useState<string>("");
  const [branchLoading, setBranchLoading] = useState<boolean>(false);
  const [branchError, setBranchError] = useState<boolean>(false);

  useEffect(() => {
    if (!branchId) return;
    setBranchLoading(true);
    fetchBranchInfo(Number(branchId))
      .then((data: BranchMain) => {
        if (data.status === "success") {
          setBranchName(data.result[0].name);
        } else {
          throw new Error(data.message || "دریافت نام با مشکل مواجه شد");
        }
      })
      .catch((err) => setBranchError(err.message))
      .finally(() => setBranchLoading(false));
  }, [branchId]);

  return (
    <div className="relative min-h-screen bg-[#F0D5B6] p-4">
      {/* نوار بالا */}
      <div className="flex justify-between items-center mb-4">
        {/* دکمه بازگشت */}
        <ReturnKey />

        <h1 className="text-2xl font-bold font-almarai text-center flex-grow">
          {branchName}
        </h1>

        {/* دکمه‌های سمت راست */}
        <div className="flex gap-3">
          {/* دکمه تغییر نمایش (یکی/دوتا در ردیف) */}
          <ToggleGrid gridCols={gridCols} onGridCols={setGridCols} />
          {/* دکمه باز کردن سایدبار */}
          <ToggleSidebar onSidebarOpen={setSidebarOpen} />
        </div>
      </div>
      <MenuCategories gridCols={gridCols} branchId={branchId} />
      {/* سایدبار */}
      <SideBar
        branchName={branchName}
        sidebarOpen={sidebarOpen}
        onSidebarOpen={setSidebarOpen}
      />
    </div>
  );
}
