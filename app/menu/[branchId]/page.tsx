"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchMenuByBranch } from "@/app/lib/api/digital-menu/api-menu";
import { Main, Result } from "@/app/types/api-menu/menu";
import CategoryCard from "@/components/menu-page/category-card";
import { FiGrid, FiMenu, FiArrowLeft } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { fetchBranchInfo } from "@/app/lib/api/digital-menu/branches";
import { Main as BranchMain } from "@/app/types/branches/branches";
export default function MenuPage() {
  const { branchId } = useParams();
  const router = useRouter();
  const [menu, setMenu] = useState<Result | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [gridCols, setGridCols] = useState(2); // تعداد ستون‌ها
  const [sidebarOpen, setSidebarOpen] = useState(false); // باز/بسته بودن سایدبار
  const [branchName, setBranchName] = useState<string>("");
  const [branchLoading, setBranchLoading] = useState<boolean>(false);
  const [branchError, setBranchError] = useState<boolean>(false);

  useEffect(() => {
    if (!branchId) return;
    setLoading(true);
    fetchMenuByBranch(Number(branchId))
      .then((data: Main) => {
        if (data.status === "success") {
          setMenu(data.result[0]);
        } else {
          throw new Error(data.message || "دریافت منو با مشکل مواجه شد");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [branchId]);

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

  if (loading) return <p>⏳ در حال بارگذاری...</p>;
  if (error) return <p className="text-red-500">❌ {error}</p>;

  return (
    <div className="relative min-h-screen bg-[#F0D5B6] p-4">
      {/* نوار بالا */}
      <div className="flex justify-between items-center mb-4">
        {/* دکمه بازگشت */}
        <button
          className="text-2xl p-2 rounded-lg bg-[#E3C19C] hover:bg-[#D0AC85] transition"
          onClick={() => router.back()}
        >
          <FiArrowLeft />
        </button>

        <h1 className="text-2xl font-bold font-almarai text-center flex-grow">
          {branchName}
        </h1>

        {/* دکمه‌های سمت راست */}
        <div className="flex gap-3">
          {/* دکمه تغییر نمایش (یکی/دوتا در ردیف) */}

          <button
            className={`text-2xl p-2 rounded-lg transition 
              ${
                gridCols === 2
                  ? "bg-[#E3C19C] hover:bg-[#D0AC85]"
                  : "bg-[#D0AC85] hover:bg-[#C49770]"
              }`}
            onClick={() => setGridCols(gridCols === 2 ? 1 : 2)}
          >
            {gridCols === 2 ? <FiGrid /> : <TfiMenuAlt />}
          </button>

          {/* دکمه باز کردن سایدبار */}
          <button
            className="text-2xl p-2 rounded-lg bg-[#E3C19C] hover:bg-[#D0AC85] transition"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* کارت‌ها */}
      {menu?.categories && menu.categories.length > 0 ? (
        <div className={`grid grid-cols-${gridCols} gap-4`}>
          {menu.categories.map((category) => (
            <CategoryCard
              key={category.category_id}
              titleFa={category.category_name}
              imageUrl={"/images/hamburger-test.jpg"}
              expand={gridCols == 1}
            />
          ))}
        </div>
      ) : (
        <p className="font-almarai flex justify-center text-red-500">
          رستوران مورد نظر یافت نشد!
        </p>
      )}

      {/* سایدبار */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end font-almarai">
          <div
            dir="rtl"
            className="text-xs sm:text-base md:text-lg lg:text-xl w-full max-w-[50%] bg-[#E3C19C] h-full p-4 shadow-lg relative transition-all duration-300 overflow-y-auto"
          >
            {/* دکمه بستن سایدبار */}
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setSidebarOpen(false)}
            >
              ✖
            </button>

            {/* عنوان */}
            <h2 className="text-xl font-bold mb-6 text-center">
              {menu?.menu_name}
            </h2>

            {/* دکمه ورود و عضویت */}
            <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
              ورود و عضویت ➡️
            </button>

            {/* آیتم‌های منو */}
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 p-2 hover:bg-[#D0AC85] rounded">
                📋 سفارشات من
              </li>
              <li className="flex items-center gap-3 p-2 hover:bg-[#D0AC85] rounded">
                📍 آدرس‌های من
              </li>
              <li className="flex items-center gap-3 p-2 hover:bg-[#D0AC85] rounded">
                🛍 فروشگاه‌های من
              </li>
              <li className="flex items-center gap-3 p-2 hover:bg-[#D0AC85] rounded">
                🏢 اطلاعات مجموعه
              </li>
              <li className="flex items-center gap-3 p-2 hover:bg-[#D0AC85] rounded">
                ⏰ ساعت کاری مجموعه
              </li>
              <li className="flex items-center gap-3 p-2 hover:bg-[#D0AC85] rounded">
                ℹ️ قوانین مجموعه
              </li>
            </ul>

            {/* لوگو (موقت) */}
            <div className="flex flex-col items-center mt-6">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">لوگو</span>
              </div>
              <p className="mt-2 text-sm font-semibold">Digital Menu Market</p>
              <p className="text-xs text-gray-700">Quality at the Top</p>
            </div>

            {/* دکمه‌های پایانی */}
            <button className="w-full mt-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
              درباره دیجیتال منو مارکت{" "}
            </button>

            <button className="w-full mt-2 flex items-center justify-center gap-2 py-2 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
              📸 Follow Us on Instagram
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
