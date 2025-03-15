import Image from "next/image";
import React from "react";

const BranchLogo = () => {
  return (
    <div className="relative mx-auto w-[80px] h-[80px] rounded-full border-2 border-white bg-white overflow-hidden -mt-10">
      <Image
        src="/images/hamburger-test.webp" // مسیر تصویر لوگو
        layout="fill"
        objectFit="cover"
        alt="Branch Logo"
      />
    </div>
  );
};

export default BranchLogo;
