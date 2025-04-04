import DepartmentsList from "@/components/departments-page/departments-list";
import SplashScreen from "@/components/loading/splash-screen";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Suspense } from "react";

const DepartmentsPage = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <div className="flex flex-col gap-4 p-4 h-full relative ">
        <DepartmentsList />
        <div className="absolute w-full bottom-0 left-0 right-0 h-[100px] bg-linear-gradient-to-top flex justify-center items-center gap-2 z-10">
          <CTAButton className="!w-[60%] !h-[35px] lxs:!h-[39px] xs:!h-[43px] flex justify-center items-center gap-2">
            <span>اسکن QR Code</span>
            <Icon icon="uil:qrcode-scan" width="24" height="24" />
          </CTAButton>
        </div>
      </div>
    </Suspense>
  );
};

export default DepartmentsPage;
