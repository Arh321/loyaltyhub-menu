"use client";
import OptionsContainer from "@/components/splite-components/options-components/options-container";
import ParticipantsComponent from "@/components/splite-components/participants-components/participants-container";
import { Tabs, TabsProps } from "antd";
import style from "./split-page-style.module.css";
import clsx from "clsx";
import ResultComponent from "@/components/splite-components/result-component/result-component";
import { useState } from "react";

const SplitPage = () => {
  const [activeTAb, setActiveTab] = useState("1");
  const [activeKey, setActiveKey] = useState<"split" | "equal" | "mixed">(
    "equal"
  );

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "تعریف دوستان",
      children: <ParticipantsComponent />,
    },
    {
      key: "2",
      label: "انتخاب دنگ و دونگی",
      children: (
        <OptionsContainer
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          handleChoseOption={(key: any) => {
            setActiveTab("3");
            setActiveKey(key);
          }}
        />
      ),
    },
    {
      key: "3",
      label: "نتیجه",
      children: <ResultComponent activeKey={activeKey} />,
    },
  ];

  return (
    <div className="p-4 w-full grow h-full overflow-y-auto flex flex-col gap-4 ">
      <Tabs
        defaultActiveKey="1"
        activeKey={activeTAb}
        items={items}
        onChange={onChange}
        className={clsx(style["split-page-container"])}
      />
    </div>
  );
};

export default SplitPage;
