import { openModal } from "@/app/store/modalSlice";
import React from "react";
import { FaClock, FaInstagram, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ActionButtons = () => {
  const dispatch = useDispatch();
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex gap-2 w-full">
      <ActionButton
        icon={<FaPhone />}
        text="ارتباط با ما"
        onClick={() => dispatch(openModal("ContactUs"))}
      />
      <ActionButton
        icon={<FaInstagram />}
        text="لینک‌های ارتباطی"
        onClick={() => {
          openLink("https://instagram.com/centralcafe");
        }}
      />
      <ActionButton
        icon={<FaClock />}
        text="ساعات کاری"
        onClick={() => dispatch(openModal("WorkTimesDrawer"))}
      />
    </div>
  );
};

const ActionButton = ({
  icon,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="flex flex-col items-center w-full py-3  bg-[#fae3ba] rounded-lg hover:bg-[#c1a990] transition-all "
      onClick={onClick}
    >
      {icon}
      <span className="mt-1 text-sm text-black">{text}</span>
    </button>
  );
};

export default ActionButtons;
