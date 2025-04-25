"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import CTAButton from "../shared-components/cta-button/cta-button";
interface NotFoundComponentProps {
  topic?: string;
  title: string;
  image?: string | StaticImageData;
  goBack?: () => void;
}

const NotFoundComponent: React.FC<NotFoundComponentProps> = ({
  title,
  topic,
  goBack,
}) => {
  return (
    <div className="w-full grow flex items-center justify-center">
      <div className="w-[90%] p-2 rounded-[8px] m-auto h-max bg-light-background dark:bg-dark-background flex flex-col items-center justify-center gap-4">
        <div className="w-full flex flex-col gap-4 items-center">
          <Image
            src="/images/logo.webp"
            width={200}
            height={200}
            alt="Logo"
            className="z-10"
          />
        </div>
        <p className="w-full flex flex-col items-center text-Secondary2 justify-center gap-[10px] font-Yekan-Medium text-light-secondary-text">
          <span className="font-Yekan-Medium ">
            {topic ? topic : "متاسفیم!"}{" "}
          </span>
          <span className="w-1/2 flex flex-col gap-2 text-tertiary regular-14 text-center">
            {title}
          </span>
        </p>
        <CTAButton
          onClick={goBack ? goBack : () => window.location.reload()}
          className="w-[60%] h-[35px] lxs:h-[39px] xs:h-[43px] flex justify-center items-center gap-2"
        >
          {goBack ? "بازگشت" : "تلاش مجدد"}
        </CTAButton>
      </div>
    </div>
  );
};

export default NotFoundComponent;
