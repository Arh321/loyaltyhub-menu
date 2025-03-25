"use client";

import TopNavbarContainer from "@/components/menu-page/page-layout.tsx/top-navbar-container";
import ModalAndDrawerContainer from "@/components/modal-and-drawer-container";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-[#f0d9b0]  flex flex-col w-full p-2 h-[100dvh] font-Yekan-Regular">
      <TopNavbarContainer />
      <ModalAndDrawerContainer />

      <div className="w-full grow h-full">{children}</div>
    </div>
  );
}
