"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import ReturnKey from "../top-navbar-components/return-key";
import ToggleSidebar from "../top-navbar-components/toggle-sidebar";
import TopNavbar from "./top-navbar";
import { SearchOutlined } from "@ant-design/icons";
import SingleProductName from "../top-navbar-components/single-product-name";
import ShareComponent from "../top-navbar-components/share-component";
import ToggleGrid from "../top-navbar-components/toggle-grid";
import { useBranchInfo } from "@/app/hooks/useBranches";
import Image from "next/image";
import { openModal } from "@/app/store/modalSlice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";

const TopNavbarContainer = () => {
  const pathname = usePathname(); // مسیر صفحه فعلی
  const { branchId } = useParams();
  const dispatch = useDispatch();

  const router = useRouter();

  const {
    data: branchData,
    isLoading,
    error,
  } = useBranchInfo(Number(branchId));

  const handleOpenModal = (modalId: string) => {
    dispatch(openModal(modalId));
  };

  const getNavbarConfig = () => {
    const isCategoriesPage = /^\/menu\/\d+$/.test(pathname);
    const isSingleProduct = /^\/menu\/\d+\/products\/\d+$/.test(pathname);
    const isProductMenu = /^\/menu\/\d+\/products$/.test(pathname);

    if (pathname === "/profile/orders") {
      return {
        center: <span>سفارشات من</span>,
        left: <ReturnKey />,
      };
    } else if (pathname === "/profile") {
      return {
        className: "!h-[30vh] !bg-[#005b4c] !text-white ",
        center: <span>پروفایل کاربری</span>,
        left: <ReturnKey />,
      };
    } else if (pathname === "/providers") {
      return {
        center: (
          <span className="text-white whitespace-nowrap">
            Digital Menu Market
          </span>
        ),
      };
    } else if (pathname === "/providers/search") {
      return {
        center: (
          <span className="text-white whitespace-nowrap">
            Digital Menu Market
          </span>
        ),
        left: <ReturnKey color="white" />,
      };
    } else if (isCategoriesPage) {
      return {
        right: (
          <>
            <div className="flex gap-3 items-center">
              <ToggleSidebar
                branchName={branchData?.result[0].name}
                isLoading={isLoading}
                error={error?.message}
              />
              <ToggleGrid />
            </div>
          </>
        ),
        center: (
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => handleOpenModal("InfoModal")}
          >
            <Image src="/images/logo.webp" alt="logo" width={30} height={30} />
            <h1 className="  text-center flex-grow">
              {isLoading ? (
                <Spin />
              ) : error ? (
                <span className="font-Yekan-Regular">{error.message}</span>
              ) : (
                branchData?.result[0].name
              )}
            </h1>
          </div>
        ),
        left: <ReturnKey />,
      };
    } else if (pathname.includes("/search")) {
      return {
        center: <h1 className="ext-center">جست و جو</h1>,
        left: <ReturnKey />,
      };
    } else if (isSingleProduct) {
      return {
        right: <ShareComponent />,
        center: <SingleProductName />,
        left: <ReturnKey />,
      };
    } else if (pathname.includes("/payment")) {
      return {
        center: "تکمیل سفارش",
        left: <ReturnKey />,
      };
    } else if (isProductMenu) {
      return {
        right: (
          <>
            <div className="flex gap-3">
              <ToggleSidebar
                branchName={branchData?.result[0]?.name}
                isLoading={isLoading}
                error={error?.message}
              />
              <SearchOutlined
                className="text-2xl text-black hover:bg-[#D0AC85] p-2 rounded-lg"
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
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => handleOpenModal("InfoModal")}
          >
            <Image src="/images/logo.webp" alt="logo" width={30} height={30} />
            {isLoading ? (
              <Spin />
            ) : error ? (
              <span className="font-Yekan-Regular">{error.message}</span>
            ) : (
              <h1 className="  text-center flex-grow">
                {branchData?.result[0].name}
              </h1>
            )}
          </div>
        ),
        left: <ReturnKey />,
      }; // مقدار پیش‌فرض
    }
  };

  const navbarConfig = getNavbarConfig();

  return (
    <div className="w-full h-max">
      <TopNavbar className="w-full " {...navbarConfig} />
    </div>
  );
};

export default TopNavbarContainer;
