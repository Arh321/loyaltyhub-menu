import SplashScreen from "@/components/loading/splash-screen";
import { lazy, Suspense } from "react";
const BasketContainer = lazy(
  () => import("@/components/basket-page/basket-container")
);
const BasketPage = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <div className="w-full h-full">
        <BasketContainer />
      </div>
    </Suspense>
  );
};

export default BasketPage;
