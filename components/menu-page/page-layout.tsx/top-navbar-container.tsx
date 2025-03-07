"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useBranchInfo } from "@/app/hooks/useBranches";
import ReturnKey from "../top-navbar-components/return-key";
import ToggleGrid from "../top-navbar-components/toggle-grid";
import ToggleSidebar from "../top-navbar-components/toggle-sidebar";
import TopNavbar from "./top-navbar";
import BranchInfo from "../top-navbar-components/branch-info";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import SearchInProducts from "../search-page/search-in-products";
import SingleProductName from "../top-navbar-components/single-product-name";
import ShareComponent from "../top-navbar-components/share-component";
import { fetchBranchInfo } from "@/app/lib/api/digital-menu/branches";
import { Router } from "next/router";

const TopNavbarContainer = () => {
  const { branchId } = useParams(); // دریافت شناسه شعبه از URL
  const pathname = usePathname(); // مسیر صفحه فعلی
  const [gridCols, setGridCols] = useState(2);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [branchName, setBranchName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // استفاده از React Query برای دریافت نام شعبه

  //   useEffect(() => {
  //     if (!branchId) return;

  //     setLoading(true);
  //     fetchBranchInfo(Number(branchId))
  //       .then((data) => {
  //         if (data?.status === "success") {
  //           setBranchName(data.result[0].name);
  //         } else {
  //           setBranchName("خطا در دریافت نام شعبه");
  //         }
  //       })
  //       .catch(() => setBranchName("خطا در دریافت اطلاعات"))
  //       .finally(() => setLoading(false));
  //   }, [branchId]);

  // تابعی برای تعیین تنظیمات نوار بالا بر اساس مسیر صفحه
  const getNavbarConfig = () => {
    const isCategoriesPage = /^\/menu\/\d+\$/.test(pathname);

    if (isCategoriesPage) {
      return {
        right: (
          <>
            <div className="flex gap-3">
              <ToggleSidebar
                onSidebarOpen={setSidebarOpen}
                branchName={branchName}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <ToggleGrid gridCols={gridCols} onGridCols={setGridCols} />
            </div>
          </>
        ),
        center: (
          <h1 className="text-2xl font-bold font-almarai text-center flex-grow">
            {branchName}
          </h1>
        ),
        left: <ReturnKey />,
      };
    }
    if (pathname.includes("/search")) {
      return {
        center: (
          <h1 className="text-2xl font-Yekan-Regular text-center">جست و جو</h1>
        ),
        left: <ReturnKey />,
      };
    }
    const isSingleProduct = /^\/menu\/\d+\/products\/\d+$/.test(pathname);
    if (isSingleProduct) {
      return {
        right: <ShareComponent />,
        center: <SingleProductName />,
        left: <ReturnKey />,
      };
    }
    if (pathname.includes("/payment")) {
      return {
        center: "تکمیل سفارش",
        left: <ReturnKey />,
      };
    }
    const isProductMenu = /^\/menu\/\d+\/products$/.test(pathname);

    if (isProductMenu) {
      return {
        right: (
          <>
            <div className="flex gap-3">
              <ToggleSidebar
                onSidebarOpen={setSidebarOpen}
                branchName={branchName}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <SearchOutlined
                onClick={() => {
                  const pathParts = window.location.pathname.split("/");
                  pathParts.pop(); // حذف آخرین بخش مسیر
                  const newPath = pathParts.join("/") + "/search"; // اضافه کردن /search
                  router.push(newPath);
                }}
              />
            </div>
          </>
        ),
        center: (
          <h1 className="text-2xl font-bold font-almarai text-center flex-grow">
            {branchName}
          </h1>
        ),
        left: <ReturnKey />,
      }; // مقدار پیش‌فرض
    }
  };

  const navbarConfig = getNavbarConfig();

  return (
    <>
      <TopNavbar {...navbarConfig} />
    </>
  );
};

export default TopNavbarContainer;
