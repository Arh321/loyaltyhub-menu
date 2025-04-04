"use client";
import useThemeConfig from "@/hooks/useThemeConfig";
import SplashScreen from "../loading/splash-screen";
import NotFoundComponent from "../not-found-page/not-found-component";
const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isError, isRefetching } = useThemeConfig();

  if (isError) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <NotFoundComponent title="مشکلی در بارگذاری صفحه رخ داده است" />
      </div>
    );
  }

  return isLoading || isRefetching ? <SplashScreen /> : children;
};

export default ConfigProvider;
