import { Suspense } from "react";
import SplashScreen from "@/components/loading/splash-screen";
import HeaderContainer from "@/components/header/header-container";
import CompanyInfoContainer from "@/components/company-info-page/company-info-container";
export default function Home() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <div className="w-full h-full relative">
        <div className="w-full absolute top-0 left-0 right-0 z-10 pt-2">
          <HeaderContainer />
        </div>
        <CompanyInfoContainer />
      </div>
    </Suspense>
  );
}
