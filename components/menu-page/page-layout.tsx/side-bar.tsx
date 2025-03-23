"use clinet";
import { Button, Drawer, Spin } from "antd";
import Image from "next/image";
import { MdOutlineLogin, MdReceiptLong, MdShoppingBag } from "react-icons/md";
import SidebarItems from "../side-bar/sidebar-items";
import { MdOutlineLocationOn } from "react-icons/md";

import { MdAccessTime } from "react-icons/md";
import { MdShop } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { FaInstagram, FaRegUser } from "react-icons/fa";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "@/app/store/modalSlice";
import { RootState } from "@/app/store/store";
import DropdownMenu from "@/components/side-bar/dropdown-menu";
import { useEffect, useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";

// import log
export default function SideBar({
  branchName,
  isLoading,
  error,
}: {
  branchName?: string;
  isLoading: boolean;
  error?: string;
}) {
  const sidebarOpen = useSelector(
    (state: RootState) => state.modal.openModals["Sidebar"] || false
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // چک کردن توکن هنگام بارگذاری صفحه
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);

      // تنظیم تایمر برای خروج خودکار بعد از 30 دقیقه
      setTimeout(
        () => {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
          dispatch(openModal("OTPDrawer"));
        },
        30 * 60 * 1000
      ); // 30 دقیقه
    }
  }, [sidebarOpen, dispatch]);
  return (
    <Drawer
      onClose={() => dispatch(closeModal("Sidebar"))}
      open={sidebarOpen}
      className="!bg-[#F0D5B6] font-Yekan-Light overflow-y-auto custom-drawer "
      style={{ width: "60vw" }}
      maskStyle={{
        background: "rgba(0, 0, 0, 0.3)", // پس‌زمینه نیمه‌شفاف
        backdropFilter: "blur(10px)", // مات شدن پس‌زمینه
      }}
      drawerStyle={{
        background: "rgba(255, 255, 255, 0.2)", // حالت شیشه‌ای برای خود دراور
        backdropFilter: "blur(15px)",
        borderRadius: "10px", // گوشه‌های گرد
      }}
    >
      {/* عنوان */}
      <div className="flex flex-col items-center">
        <Image
          src="/images/logo.webp"
          loading="lazy"
          alt="logo pic"
          width={100}
          height={100}
        />
        {isLoading ? (
          <Spin />
        ) : error ? (
          <span className="font-Yekan-Regular text-red-600">{error}</span>
        ) : (
          <h2 className="text-xl font-bold mb-6 text-center">{branchName}</h2>
        )}
      </div>
      {/* دکمه ورود و عضویت */}

      {/* آیتم‌های منو */}

      <ul className="mt-6 space-y-4 whitespace-nowrap">
        {!isLoggedIn ? (
          <Button
            className="w-full flex items-center justify-center gap-2 custom-button transition"
            onClick={() => {
              dispatch(openModal("OTPDrawer"));
            }}
          >
            <MdOutlineLogin />
            <span>ورود و عضویت</span>
          </Button>
        ) : (
          <DropdownMenu
            items={[
              <SidebarItems
                text="پروفایل من"
                icon={<FaRegUser className="text-base" />}
                onClick={() => {
                  router.push(window.location.origin + "/profile");
                  dispatch(closeModal("Sidebar"));
                }}
                key={1}
              />,
              <SidebarItems
                text="سفارشات من"
                icon={<MdReceiptLong className="text-base" />}
                onClick={() => {
                  router.push("/profile/orders");
                  dispatch(closeModal("Sidebar"));
                }}
                key={2}
              />,
              <SidebarItems
                text="آدرس های من"
                icon={<MdOutlineLocationOn className="text-base" />}
                onClick={() => {
                  dispatch(closeModal("Sidebar"));
                }}
                key={3}
              />,
              <SidebarItems
                text="فروشگاه های من"
                icon={<MdShop className="text-base" />}
                onClick={() => {
                  router.push("/providers");
                  dispatch(closeModal("Sidebar"));
                }}
                key={4}
              />,
              <SidebarItems
                text="خروج از حساب کاربری"
                icon={<LogoutOutlined className="text-base" />}
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsLoggedIn(false);
                  dispatch(openModal("OTPDrawer"));
                }}
                key={5}
              />,
            ]}
          />
        )}

        <SidebarItems
          text="اطلاعات مجموعه"
          icon={<MdShoppingBag className="text-base" />}
          onClick={() => {
            dispatch(openModal("InfoModal"));
          }}
        />

        <SidebarItems
          text="ساعت کاری مجموعه"
          icon={<MdAccessTime className="text-base" />}
          onClick={() => dispatch(openModal("WorkTimesDrawer"))}
        />

        <SidebarItems
          text="قوانین مجموعه"
          icon={<MdInfoOutline className="text-base" />}
          onClick={() => {
            dispatch(openModal("RulesModal"));
          }}
        />
      </ul>

      {/* لوگو (موقت) */}
      <div className="flex flex-col items-center mt-6">
        <Image
          src="/images/logo.webp"
          loading="lazy"
          alt="logo pic"
          width={100}
          height={100}
        />
        <p className="mt-2 text-sm font-semibold">Digital Menu Market</p>
        <p className="text-xs text-gray-700">Quality at the Top</p>
      </div>
      {/* دکمه‌های پایانی */}
      <button className="w-full mt-4 py-2 bg-[#005b4c] text-white rounded-lg hover:darken transition">
        درباره دیجیتال منو مارکت{" "}
      </button>
      <button className="w-full mt-2 flex items-center justify-center gap-2 py-2 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
        <FaInstagram /> <span>Follow Us on Instagram</span>
      </button>
    </Drawer>
  );
}
