import TopNavbarContainer from "@/components/menu-page/page-layout.tsx/top-navbar-container";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f0d9b1] relative flex flex-col h-screen w-full">
      <div className="h-[30vh] bg-[#005b4c] text-white">
        <TopNavbarContainer />
      </div>
      {children}
    </div>
  );
};

export default ProfileLayout;
