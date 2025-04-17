"use client";
import { Drawer } from "antd";
import React, { useState } from "react";
import DnDExample from "./item-split-selection/splite-section-container";

const options = [
  {
    id: 1,
    key: "equal",
    title: "تقسیم مساوی",
    description: "مبلغ کل سفارش به تعداد افراد تقسیم می‌شود.",
    icon: "🤝", // یا یه آیکون اختصاصی اگه خواستی
  },
  {
    id: 2,
    key: "split",
    title: "بر اساس آیتم‌ها",
    description:
      "هر فرد فقط هزینه‌ی آیتم‌هایی که سفارش داده را پرداخت می‌کند. همچنین می‌توانید تعیین کنید که در هر آیتم کدام اشخاص سهیم هستند",
    icon: "🍱",
  },
];

interface OptionsContainerProps {
  handleChoseOption: (key: string) => void;
}

const OptionsContainer: React.FC<OptionsContainerProps> = ({
  handleChoseOption,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-full grid grid-cols-1 gap-2 h-full">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              style={{
                opacity: 0,
                transform: "translateY(100px)",
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => {
                if (option.key == "split") {
                  setOpen(true);
                } else {
                  handleChoseOption(option.key);
                }
              }}
              className="col-span-1 h-full bg-light-secondary rounded-[10px] flex flex-col items-center justify-center gap-5 p-2 animate-fadeUp"
            >
              <h2 className="font-Yekan-Medium text-light-secondary-text text-center">
                {option.title}
              </h2>
              <p className="font-Yekan-Light text-sm text-gray-400 text-center">
                {option.description}
              </p>
              <p>{option.icon}</p>
            </div>
          );
        })}
      </div>
      <Drawer
        title="بر اساس آیتم‌ها"
        placement="bottom"
        closable
        className="custom-list"
        onClose={onClose}
        open={open}
        classNames={{
          header:
            "!border-none font-Yekan-Medium [&_.ant-drawer-header-title]:flex-row-reverse !text-light-secondary-text [&_.anticon-close]:!text-light-secondary-text !p-2",
          content: "!bg-light-background rounded-t-xl !h-full !max-h-full",
          body: "!p-2 !h-full",
        }}
        height="95vh" // ارتفاع کلی دراور
        style={{ maxHeight: "70vh", overflowY: "auto", direction: "rtl" }} // حداکثر ارتفاع لیست و قابلیت اسکرول
      >
        <DnDExample />
      </Drawer>
    </>
  );
};

export default OptionsContainer;
