"use client";
import React from "react";
import { Drawer, List } from "antd";
import { closeModal } from "@/app/store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const ContactUsBottom: React.FC = () => {
  const dispatch = useDispatch();
  const open = useSelector(
    (state: RootState) => state.modal.openModals["ContactUs"] || false
  );
  const contactUsInfo = [{ title: "رزرواسیون", phoneNumber: "091234567" }];
  // console.log("entered contactusbottom drawer");
  return (
    <Drawer
      title="ارتباط با ما"
      placement="bottom"
      closable
      className="custom-list"
      onClose={() => dispatch(closeModal("ContactUs"))}
      open={open}
      height="20vh" // ارتفاع کلی دراور
      style={{ maxHeight: "20vh", overflowY: "auto" }} // حداکثر ارتفاع لیست و قابلیت اسکرول
    >
      <List
        dataSource={contactUsInfo}
        className=" custom-list gap-2 overflow-y-auto"
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
