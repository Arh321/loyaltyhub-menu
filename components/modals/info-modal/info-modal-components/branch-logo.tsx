import Image from "next/image";
import React from "react";

const BranchLogo = ({className}:{className?:string}) => {
  return (
    <div className={`relative mx-auto w-[80px] h-[80px] rounded-full  overflow-hidden -mt-10 ${className ? className : ""}`}>
      <Image
        src="/images/logo.webp" // مسیر تصویر لوگو
        layout="fill"
        objectFit="cover"
        alt="Branch Logo"
      />
    </div>
  );
};

export default BranchLogo;
