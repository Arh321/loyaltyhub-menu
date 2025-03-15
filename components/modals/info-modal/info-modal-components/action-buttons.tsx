import React from "react";
import { FaClock, FaInstagram, FaPhone } from "react-icons/fa";

const ActionButtons = () => {
  return (
    <div className="mt-6 flex justify-around">
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
    <button className="flex flex-col items-center p-3 border border-gray-300 bg-[#fae3ba] rounded-lg hover:bg-gray-600 transition-all w-28">
      {icon}
      <span className="mt-1 text-xs text-gray-700">{text}</span>
    </button>
  );
};

export default ActionButtons;
