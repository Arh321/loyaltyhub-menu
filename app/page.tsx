import ThemeSwitch from "@/components/theme-provider/theme-sitch";
// import WelcomeBAckGround from "@/components/welcome-page/welcome-background/welcome-background";
import WelcomeSwiperContainer from "@/components/welcome-page/wellcome-swiper/wellcome-swiper-containe";

export default function WelcomePAge() {
  return (
    <div className="w-full max-w-[470px] mx-auto h-screen relative light:bg-background dark:bg-background">
      <div className="w-max h-max absolute top-4 right-4 z-10">
        <ThemeSwitch />
      </div>
      <WelcomeSwiperContainer />
    </div>
  );
}
