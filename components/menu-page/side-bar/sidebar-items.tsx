import React from "react";

const SidebarItems = ({
  text,
  icon,
}: {
  text: String;
  icon: React.ReactNode;
}) => {
  return (
    <li className="flex items-center gap-3 p-2 hover:bg-[#c1a990] rounded transition cursor-pointer">
      {icon}
      {text}
    </li>
  );
};

export default SidebarItems;
