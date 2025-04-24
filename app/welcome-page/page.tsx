import WelcomeSwiperContainer from "@/components/welcome-page/wellcome-swiper/wellcome-swiper-containe";
import { Suspense } from "react";
import SplashScreen from "@/components/loading/splash-screen";
export default function WelcomePage() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <div className="w-full  mx-auto h-screen relative light:bg-background dark:bg-background">
        <WelcomeSwiperContainer />
      </div>
    </Suspense>
  );
}
