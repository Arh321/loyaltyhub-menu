import Image from "next/image";
import React from "react";

const HoverImage = () => {
  return (
    <div className="relative w-full h-[220px] overflow-hidden rounded-t-lg  ">
      <Image
        src="/images/logo.webp" // مسیر تصویر را تغییر دهید
        fill
        objectFit="contain"
        alt="Branch Banner"
        className="transition-transform duration-300 hover:scale-105 "
      />
    </div>
  );
};

export default HoverImage;
