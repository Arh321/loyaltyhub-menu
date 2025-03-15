import React from "react";

const OpenCloseTag = ({ isOpen = false }: { isOpen?: boolean }) => {
  return (
    <span
      className={`px-3 py-1 text-sm font-bold rounded-md absolute bottom-[-6px] right-0 text-red-500 border border-red-500 bg-transparent `}
    >
      {isOpen ? "Open" : "Closed"}
    </span>
  );
};

export default OpenCloseTag;
