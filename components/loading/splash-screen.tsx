"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const SplashScreen = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-700 z-50">
        <div className="relative flex items-center justify-center w-[120px] h-[120px]">
          {/* اسپینر */}
          <div className="absolute w-full h-full animate-spin rounded-full border-4 border-t-transparent border-white"></div>

          {/* لوگو */}
          <Image
            src="/images/logo.webp"
            width={70}
            height={70}
            alt="Logo"
            className="z-10"
          />
        </div>
      </div>
    );
  }

  return null;
};

export default SplashScreen;
