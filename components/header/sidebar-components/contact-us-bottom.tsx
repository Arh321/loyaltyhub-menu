"use client";
import React from "react";
import { Drawer, List } from "antd";

interface ContactUsBottomProps {
  open: boolean;
  onClose: () => void;
}

const ContactUsBottom: React.FC<ContactUsBottomProps> = ({ open, onClose }) => {
  const contactUsInfo = [{ title: "رزرواسیون", phoneNumber: "091234567" }];
  // console.log("entered contactusbottom drawer");
  return (
    <Drawer
      title="ارتباط با ما"
      placement="bottom"
      closable
      className="custom-list"
      onClose={onClose}
      open={open}
      classNames={{
        header:
          "!border-none font-Yekan-Medium [&_.ant-drawer-header-title]:flex-row-reverse !p-2",
        content: "!bg-light-background rounded-t-xl",
        body: "!p-2",
      }}
      height="70vh" // ارتفاع کلی دراور
      style={{ maxHeight: "70vh", overflowY: "auto", direction: "rtl" }} // حداکثر ارتفاع لیست و قابلیت اسکرول
    >
      <List
        dataSource={contactUsInfo}
        className=" custom-list gap-2 overflow-y-auto font-Yekan-Medium"
        renderItem={(item) => (
          <List.Item className={`flex justify-between items-center `}>
            <span className="font-bold">{item.title}</span>
            <span> {item.phoneNumber}</span>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default ContactUsBottom;
