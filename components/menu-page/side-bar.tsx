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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end font-almarai">
      <div
        dir="rtl"
        className="text-xs sm:text-base md:text-lg lg:text-xl w-full max-w-[50%] bg-[#E3C19C] h-full p-4 shadow-lg relative transition-all duration-300 overflow-y-auto"
      >
        {/* دکمه بستن سایدبار */}
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => onSidebarOpen(false)}
        >
          ✖
        </button>

        {/* عنوان */}
        <h2 className="text-xl font-bold mb-6 text-center">{branchName}</h2>

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
  );
}
