import TopNavbar from "@/components/menu-page/page-layout.tsx/top-navbar";
import TopNavbarContainer from "@/components/menu-page/page-layout.tsx/top-navbar-container";
import ReturnKey from "@/components/menu-page/top-navbar-components/return-key";
import InfoModal from "@/components/modals/info-modal/info-modal-container/info-modal";
import React, { ReactNode } from "react";

const ProvidersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#2d2d2d] h-screen px-2">
      <TopNavbarContainer />
      {children}
    </div>
  );
};

export default ProvidersLayout;
