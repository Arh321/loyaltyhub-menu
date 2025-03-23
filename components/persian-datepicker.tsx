"use client";

import React from "react";
import { ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import fa_IR from "antd/locale/fa_IR"; // مسیر جدید لوکال‌های Antd در ورژن‌های جدید
import "antd/dist/reset.css"; // ریست استایل‌ها
import dayjs from "@/app/lib/dayjs"; // ایمپورت dayjs تنظیم شده

const JalaliDatePicker = ({
  title,
  onChange,
}: {
  title: string;
  onChange: (date: string) => void;
}) => {
  const defaultDate = dayjs("1403-01-01");
  // مقدار اولیه شمسی
  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      const formattedDate = date.format("YYYY-MM-DD");
      onChange(formattedDate);
    }
  };
  return (
    <ConfigProvider locale={fa_IR} direction="rtl">
      <div className="w-full flex flex-col gap-4 font-Yekan-Regular">
        <p>{title}</p>
        <DatePickerJalali
          defaultValue={defaultDate}
          onChange={handleDateChange}
        />
      </div>
    </ConfigProvider>
  );
};

export default JalaliDatePicker;
