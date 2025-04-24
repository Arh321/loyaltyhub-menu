import DepartmentsList from "@/components/departments-page/departments-list";
import HeaderContainer from "@/components/header/header-container";
import SplashScreen from "@/components/loading/splash-screen";

import { Suspense } from "react";

const DepartmentsPage = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <div className="flex flex-col gap-4  h-full relative ">
        <HeaderContainer />
        <DepartmentsList />
      </div>
    </Suspense>
  );
};

export default DepartmentsPage;
