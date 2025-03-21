"use client";
import WorkTimesDrawer from "@/components/drawers/work-times-bottom";
import TopNavbarContainer from "@/components/menu-page/page-layout.tsx/top-navbar-container";
import InfoModal from "@/components/modals/info-modal/info-modal-container/info-modal";
import RulesModal from "@/components/modals/rules-modal/rules-modal";
import OTPDrawer from "@/components/otp-login/otp-drawer";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-[#f0d9b0]  flex flex-col gap-4 w-full p-4 h-screen font-Yekan-Regular">
      <TopNavbarContainer />
      <RulesModal modalId="RulesModal" />
      <WorkTimesDrawer />
      <InfoModal modalId="InfoModal" />
      <OTPDrawer />
      <div>{children}</div>
    </div>
  );
}
