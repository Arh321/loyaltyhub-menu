"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface CustomButtonProps {
  bgColor?: string;
  textColor?: string;
  bgHoverColor?: string;
  children: React.ReactNode;
  className?: string;
  width?: string | number;
  buttonDestination?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor,
  textColor,
  bgHoverColor,
  children,
  className,
  width,
  buttonDestination,
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    if (buttonDestination) {
      router.push(buttonDestination);
    }
  };

  return (
    <button
      style={{
        backgroundColor: isHovered ? bgHoverColor : bgColor,
        color: textColor,
        width: width,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` ${
        className ? className : ""
      }transition-all cursor-pointer rounded-lg p-3`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
