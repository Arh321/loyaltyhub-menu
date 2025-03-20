"use client";
import React from "react";
import { Drawer } from "antd";
import { closeModal } from "@/app/store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const ContactUsDrawer: React.FC = () => {
  const dispatch = useDispatch();
  const open = useSelector(
    (state: RootState) => state.modal.openModals["ContactUsDrawer"] || false
  );

  return (
    <Drawer
      title="انتخاب زمان"
      placement="bottom"
      closable
      onClose={() => dispatch(closeModal("ContactUsDrawer"))}
      open={open}
      height="60vh" // ارتفاع کلی دراور
      bodyStyle={{ maxHeight: "50vh", overflowY: "auto" }} // حداکثر ارتفاع لیست و قابلیت اسکرول
    ></Drawer>
  );
};

export default ContactUsDrawer;
