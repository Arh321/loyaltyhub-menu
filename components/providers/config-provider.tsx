"use client";
import useThemeConfig from "@/hooks/useThemeConfig";
import SplashScreen from "../loading/splash-screen";
import NotFoundComponent from "../not-found-page/not-found-component";
import WelcomeModal from "./welcome-modal";
import { Suspense } from "react";
import useWelcome from "@/hooks/useWelcome";
const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isError, isRefetching, welcomeModal, setWelcomeModal } =
    useThemeConfig();
  useWelcome();

  if (isError) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <NotFoundComponent title="مشکلی در بارگذاری صفحه رخ داده است" />
      </div>
    );
  }

  return isLoading || isRefetching ? (
    <SplashScreen />
  ) : (
    <Suspense fallback={<SplashScreen />}>
      <div className="w-full h-full">
        {children}
        <WelcomeModal
          isOpen={welcomeModal.isOpen}
          title={welcomeModal.title}
          onOk={() => {
            setWelcomeModal({
              isOpen: false,
              title: "",
              description: "",
            });
            sessionStorage.setItem("welcomeModalShown", "true");
          }}
          onCancel={() => {
            setWelcomeModal({
              isOpen: false,
              title: "",
              description: "",
            });
            sessionStorage.setItem("welcomeModalShown", "true");
          }}
        />
      </div>
    </Suspense>
  );
};

export default ConfigProvider;
