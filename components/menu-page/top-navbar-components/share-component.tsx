import { usePathname } from "next/navigation";
import React from "react";
import { IoShareSocial } from "react-icons/io5";

const ShareComponent = () => {
  const pathname = usePathname(); // گرفتن مسیر فعلی
  const currentUrl =
    typeof window !== "undefined" ? window.location.origin + pathname : "";
  const handleShare = async () => {
    const shareData = {
      title: "دیجیتال منو",
      text: "اشتراک گذاری محصول ",
      url: currentUrl, // لینکی که می‌خوای به اشتراک بذاری
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("خطا در اشتراک‌گذاری:", error);
      }
    } else {
      alert("مرورگر شما از اشتراک‌گذاری بومی پشتیبانی نمی‌کند.");
    }
  };
  return (
    <button
      className="text-2xl p-2 rounded-lg  hover:bg-[#D0AC85] transition"
      onClick={handleShare}
    >
      {/* <ShareAltOutlined
        type="filled"
        style={{ color: "black" }}
        className="text-lg"
      /> */}
      <IoShareSocial />
    </button>
  );
};

export default ShareComponent;
