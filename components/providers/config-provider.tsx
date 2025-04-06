"use client";
import useThemeConfig from "@/hooks/useThemeConfig";
import SplashScreen from "../loading/splash-screen";
import NotFoundComponent from "../not-found-page/not-found-component";
import WelcomeModal from "./welcome-modal";
import { Suspense } from "react";
const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isError, isRefetching, welcomeModal, setWelcomeModal } =
    useThemeConfig();

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
          description={welcomeModal.description}
          onOk={() => {
            setWelcomeModal({
              isOpen: false,
              title: "",
              description: "",
            });
          }}
          onCancel={() => {
            setWelcomeModal({
              isOpen: false,
              title: "",
              description: "",
            });
          }}
        />
      </div>
    </Suspense>
  );
};

export default ConfigProvider;
