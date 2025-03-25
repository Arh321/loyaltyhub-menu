"use client";
import React, { useState } from "react";
import { Drawer, List } from "antd";
import { closeModal } from "@/app/store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const WorkTimesDrawer: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState("یکشنبه");
  const dispatch = useDispatch();
  const open = useSelector(
    (state: RootState) => state.modal.openModals["WorkTimesDrawer"] || false
  );
  const timeSlots = [
    { day: "شنبه", time: "08:00 - 24:00" },
    { day: "یکشنبه", time: "16:00 - 24:00" },
    { day: "دوشنبه", time: "08:00 - 24:00" },
    { day: "سه‌شنبه", time: "08:00 - 24:00" },
    { day: "چهارشنبه", time: "08:00 - 24:00" },
    { day: "پنج‌شنبه", time: "08:00 - 24:00" },
    { day: "جمعه", time: "08:00 - 24:00" },
  ];
  console.log("worktimesdrawer entered");
  return (
    <Drawer
      title="ساعات کاری مجموعه"
      placement="bottom"
      closable
      className="custom-list "
      onClose={() => dispatch(closeModal("WorkTimesDrawer"))}
      open={open}
      height="70vh" // ارتفاع کلی دراور
      style={{ maxHeight: "70vh", overflowY: "auto" }} // حداکثر ارتفاع لیست و قابلیت اسکرول
    >
      <List
        dataSource={timeSlots}
        className=" custom-list gap-2 overflow-y-auto"
        renderItem={(item) => (
          <List.Item
            onClick={() => setSelectedDay(item.day)}
            className={`flex justify-between items-center ${item.day === selectedDay ? "bg-[#005b4c]" : ""}`}
          >
            <span className="font-bold">{item.day}</span>
            <span> {item.time}</span>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default WorkTimesDrawer;
