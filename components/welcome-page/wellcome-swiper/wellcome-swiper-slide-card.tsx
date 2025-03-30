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
      className="w-full flex flex-col gap-[10px] h-[325px] px-[22px] py-[26px]"
    >
      <h2 className="font-almarai translate-x-full opacity-0 text-[32px] !text-light-primary-text dark:text-dark-primary-text">
        {title}
      </h2>
      <p className="font-almarai translate-y-full opacity-0 text-[18px] leading-[32px] text-light-primary-text dark:text-dark-primary-text">
        {content}
      </p>
    </div>
  );
};

export default WelcomeSwiperSlideCart;
