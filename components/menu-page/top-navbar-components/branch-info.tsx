import { Image } from "antd";
import React from "react";

const BranchInfo = ({ title, logoSrc }: { title: string; logoSrc: string }) => {
  return (
    <div className="flex">
      <Image src={logoSrc} title={title} alt="logo image" />
      <span>{title}</span>
    </div>
  );
};

export default BranchInfo;
