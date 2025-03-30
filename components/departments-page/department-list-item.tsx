"use client";
import { useRouter } from "next/navigation";
import React, { Suspense, useRef } from "react";
import { StaticImageData } from "next/image";
import clsx from "clsx";
import ImageWithLoader from "../image-with-loader/image-with-loader";
import { Skeleton } from "antd";
interface ProvidersCardProps {
  name: string;
  imageSrc: StaticImageData;
  cardDestination: number; // تغییر به string
  imageId: number;
}

const hoverStyles = [
  "[&_.image-container]:right-0",
  "[&_.image-container]:!w-full",
  "[&_.image-container]:!rounded-none",
  "[&_.image-container]:!overflow-hidden",
  "[&_.image-container]:!object-cover",
  "[&_.image-container]:!h-full",
  "[&_.text-container]:!w-full",
  "[&_.text-container]:!h-full",
  "[&_.text-container]:!bg-[rgba(0,0,0,0.7)]",
  "!p-0",
];

const ProvidersCard: React.FC<ProvidersCardProps> = ({
  name,
  imageSrc,
  cardDestination,
  imageId,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/menu/${cardDestination}`);
  };

  const handleMouseEnter = () => {
    if (ref.current) {
      ref.current.classList.add(...hoverStyles);
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.classList.remove(...hoverStyles);
    }
  };

  return (
    <div
      ref={ref}
      id={`department-list-item-${imageId}`}
      role="button"
      className={clsx(
        "w-full h-[80px] lxs:h-[85px] xs:h-[90px] p-1 flex items-center relative cursor-pointer overflow-hidden animate-fadeIn rounded-full text-base font-Yekan-Bold bg-[#2D2D2D] hover:bg-[#3D3D3D]"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // استفاده از تابع جداگانه برای مدیریت کلیک
    >
      {/* عکس در انتها */}
      <Suspense
        fallback={
          <div className="w-[calc(80px-0.5rem)] aspect-square  lxs:w-[calc(85px-0.5rem)] xs:w-[calc(90px-0.5rem)]  rounded-full">
            <Skeleton.Node active className="!w-full !h-full rounded-full" />
          </div>
        }
      >
        <div className="w-[calc(80px-0.5rem)] absolute top-0 bottom-0 my-auto right-1  aspect-square  lxs:w-[calc(85px-0.5rem)] xs:w-[calc(90px-0.5rem)]  rounded-full overflow-hidden image-container transition-all duration-500">
          <ImageWithLoader
            src={imageSrc.src}
            alt={`${name} pic`}
            width={80}
            height={80}
            imageClass="object-cover"
          />
        </div>
      </Suspense>
      {/* متن در وسط */}
      <div className="flex flex-col items-center  h-full gap-1 xs:gap-2 justify-center grow z-[2] text-container">
        <span className="w-max h-max block lxs:text-base text-sm xs:text-xl font-Yekan-Medium text-white text-center transition-all duration-500">
          {name}
        </span>
        <span className="w-max h-max block lxs:text-xs xs:text-xs font-Yekan-Medium text-white text-center ">
          Rose Darvishi Hotel
        </span>
      </div>
    </div>
  );
};

export default ProvidersCard;
