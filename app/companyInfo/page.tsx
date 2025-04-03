import CompanyInfoContainer from "@/components/company-info-page/company-info-container";
import SplashScreen from "@/components/loading/splash-screen";
import { Suspense } from "react";

const CompanyInfoPage = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <CompanyInfoContainer />
    </Suspense>
  );
};

export default CompanyInfoPage;
