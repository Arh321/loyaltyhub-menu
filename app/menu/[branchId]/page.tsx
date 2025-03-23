import SplashScreen from "@/components/loading/splash-screen";
import MenuCategories from "@/components/menu-page/menu-categories";
import { Suspense } from "react";

export default function MenuPage() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <div className="w-full h-full overflow-auto pb-20">
        <MenuCategories />
      </div>
    </Suspense>
  );
}
