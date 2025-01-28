interface WelcomeSwiperSlideCartProps {
  title: string;
  content: string;
}

const WelcomeSwiperSlideCart: React.FC<WelcomeSwiperSlideCartProps> = ({
  content,
  title,
}) => {
  return (
    <div
      dir="rtl"
      className="w-full flex flex-col gap-[10px] bg-welcome-slide-linear h-[325px] px-[22px] py-[26px]"
    >
      <h2 className="font-almarai translate-x-full opacity-0 font-bold text-[24px] text-light-primary dark:text-dark-primary">
        {title}
      </h2>
      <p className="font-almarai translate-y-full opacity-0 font-light text-[13px] leading-[32px] text-light-primary dark:text-dark-text-light-primary">
        {content}
      </p>
    </div>
  );
};

export default WelcomeSwiperSlideCart;
