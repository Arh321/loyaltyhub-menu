import { Drawer } from "antd";
import Image from "next/image";
import { MdReceiptLong, MdShoppingBag } from "react-icons/md";
import SidebarItems from "../side-bar/sidebar-items";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { MdShop } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { LoginOutlined } from "@ant-design/icons";

// import log
export default function SideBar({
  branchName,
  sidebarOpen,
  onSidebarOpen,
}: {
  branchName: string;
  sidebarOpen: boolean;
  onSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (!sidebarOpen) {
    return null;
  }
  return (
    <Drawer
      onClose={() => onSidebarOpen(false)}
      open={sidebarOpen}
      className="!bg-[#F0D5B6] font-Yekan-Regular overflow-y-auto"
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
        <h2 className="text-xl font-bold mb-6 text-center">{branchName}</h2>
      </div>
      {/* دکمه ورود و عضویت */}
      <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-black text-green-700 rounded-lg bg-transparent transition">
        <LoginOutlined />
        <span>ورود و عضویت</span>
      </button>
      {/* آیتم‌های منو */}
      <ul className="mt-6 space-y-4">
        <SidebarItems text="سفارشات من" icon={<MdReceiptLong />} />
        <SidebarItems text="آدرس های من" icon={<MdOutlineLocationOn />} />
        <SidebarItems text="فروشگاه های من" icon={<MdShop />} />
        <SidebarItems text="اطلاعات مجموعه" icon={<MdShoppingBag />} />
        <SidebarItems text="ساعت کاری مجموعه" icon={<MdAccessTime />} />
        <SidebarItems text="قوانین مجموعه" icon={<MdInfoOutline />} />
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

    //   </div>
    // </div>
  );
}
