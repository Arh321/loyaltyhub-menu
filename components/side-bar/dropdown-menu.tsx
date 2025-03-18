"use client";
import React, { useState } from "react";
import { Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { FaRegUser } from "react-icons/fa";

const DropdownMenu = ({ items }: { items: React.ReactNode[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full font-Yekan-Regular">
      {/* دکمه دراپ‌داون */}
      <Button
        className="text-sm font-regular w-full flex justify-between items-center px-2  font-Yekan-Regular"
        onClick={() => setOpen(!open)}
      >
        {<FaRegUser className="text-base" />}
        <span>حساب کاربری من</span>
        {open ? <UpOutlined /> : <DownOutlined />}
      </Button>

      {/* محتوای منو */}
      {open && (
        <div className="mt-2 p-2 bg-transparent rounded-lg transition-all font-Yekan-Thin">
          {items.map((item, index) => (
            <div key={index} className="py-1 transition-all">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
