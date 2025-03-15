import React from "react";

const SidebarItems = ({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <li
      className="flex items-center gap-3 p-2 hover:bg-[#c1a990] rounded transition cursor-pointer"
      onClick={onClick}
    >
      {icon}
      {text}
    </li>
  );
};

export default SidebarItems;
