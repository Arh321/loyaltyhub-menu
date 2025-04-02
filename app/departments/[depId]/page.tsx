import MenusContainer from "@/components/menu-page/menus-container";
import { Suspense } from "react";
import SplashScreen from "@/components/loading/splash-screen";
const DepartmentPage = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <MenusContainer />
    </Suspense>
  );
};

export default DepartmentPage;
