"use client";
import { useRouter } from "next/navigation";
import React, { memo, Suspense, useEffect, useRef } from "react";
import clsx from "clsx";
import ImageWithLoader from "../image-with-loader/image-with-loader";
import { motion } from "framer-motion";
import { DepartmentItemSkeleton } from "./department-item-skeleton";

interface ProvidersCardProps {
  name: string;
  imageSrc: string;
  cardDestination: number;
  imageId: number;
  enName: string;
  index: number;
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
  enName,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // 👇 Prefetch صفحه مقصد وقتی کاربر میاد روی کارت
  useEffect(() => {
    router.prefetch(`/departments/${cardDestination}`);
  }, [cardDestination, router]);

  const handleClick = () => {
    router.push(`/departments/${cardDestination}`);
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
    <motion.div
      ref={ref}
      id={`department-list-item-${imageId}`}
      role="button"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={clsx(
        "w-full h-[80px] lxs:h-[85px] xs:h-[90px] p-1 flex items-center relative cursor-pointer overflow-hidden animate-fadeIn rounded-full text-base font-Yekan-Bold bg-[#2D2D2D] hover:bg-[#3D3D3D]"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Suspense
        fallback={
          <div className="w-[calc(80px-0.5rem)] aspect-square rounded-full">
            <DepartmentItemSkeleton className="!w-full !h-full rounded-full" />
          </div>
        }
      >
        <div className="w-[calc(80px-0.5rem)] absolute top-0 bottom-0 my-auto right-1 aspect-square rounded-full overflow-hidden image-container transition-all duration-500">
          <ImageWithLoader
            src={imageSrc}
            alt={`${name} pic`}
            loading="lazy"
            fetchPriority="low"
            imageClass="object-cover w-full h-full"
            // loading="eager" // ← اگه تصویر خیلی مهمه، فعال کن!
          />
        </div>
      </Suspense>

      <div className="flex flex-col items-center h-full gap-1 xs:gap-2 justify-center grow z-[2] text-container">
        <span className="w-max h-max block lxs:text-base text-sm xs:text-xl font-Yekan-Medium text-white text-center transition-all duration-500">
          {name}
        </span>
        <span className="w-max h-max block lxs:text-xs xs:text-xs font-Yekan-Medium text-white text-center">
          {enName || "Rose Darvishi Hotel"}
        </span>
      </div>
    </motion.div>
  );
};

export default memo(ProvidersCard);
