import Image from "next/image";
import React from "react";

const HoverImage = () => {
  return (
    <div className="relative w-full h-[180px] overflow-hidden rounded-t-lg">
      <Image
        src="/images/hamburger-test.webp" // مسیر تصویر را تغییر دهید
        layout="fill"
        objectFit="cover"
        alt="Branch Banner"
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default HoverImage;
