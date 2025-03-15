import React from "react";
import { FaClock, FaInstagram, FaPhone } from "react-icons/fa";

const ActionButtons = () => {
  return (
    <div className="flex gap-2 w-full">
      <ActionButton icon={<FaClock />} text="ساعات کاری" />
      <ActionButton icon={<FaInstagram />} text="لینک‌های ارتباطی" />
      <ActionButton icon={<FaPhone />} text="ارتباط با ما" />
    </div>
  );
};

const ActionButton = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <button className="flex flex-col items-center w-full py-3  bg-[#fae3ba] rounded-lg hover:bg-[#c1a990] transition-all ">
      {icon}
      <span className="mt-1 text-sm text-black">{text}</span>
    </button>
  );
};

export default ActionButtons;
