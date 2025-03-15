import TopNavbarContainer from "@/components/menu-page/page-layout.tsx/top-navbar-container";
import React,from "react";

const ProvidersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#2d2d2d] h-screen px-2">
      <TopNavbarContainer />
      {children}
    </div>
  );
};

export default ProvidersLayout;
