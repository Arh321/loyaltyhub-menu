"use client";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import style from "./wellcome-swiper-container.module.css";
import WelcomeSwiperSlideCart from "./wellcome-swiper-slide-card";
import { useEffect, useRef, useState, useCallback } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

// Slide Data
const slides = [
  {
    id: 1,
    title: "سفارش آسان",
    content:
      "با اسکن QR Code، منوی دیجیتال را باز و غذای دلخواه خود را انتخاب کنید. سفارش شما تنها با چند لمس ساده ثبت خواهد شد!",
  },
  {
    id: 2,
    title: "انتخاب متنوع",
    content:
      " از بین انواع غذاها و نوشیدنی‌های خوشمزه گزینه مورد علاقه خود را پیدا کنید. انتخاب شما راحت‌تر از همیشه خواهد بود.",
  },
  {
    id: 3,
    title: "آماده‌سازی سریع",
    content:
      " پس از ثبت، اطلاع‌رسانی آماده بودن سفارش شما نمایش داده می‌شود. نیازی به انتظار طولانی نیست",
  },
  {
    id: 4,
    title: "تجربه مدرن",
    content:
      "صف‌های طولانی را پشت سر بگذارید و در کوتاه‌ترین زمان سفارش خود را دریافت کنید. رضایت شما اولویت ماست.",
  },
];

const WelcomeSwiperContainer = () => {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const router = useRouter();
  // useMemo to prevent unnecessary re-renders
  const handleSlideChange = useCallback(() => {
    if (swiperRef.current) {
      // Remove the "active-slide" class from all slides
      swiperRef.current.slides.forEach((slide) =>
        slide.classList.remove(style["custom-active-slide"])
      );

      // Add the "active-slide" class to the current active slide
      const activeSlide =
        swiperRef.current.slides[swiperRef.current.activeIndex];
      if (activeSlide) {
        activeSlide.classList.add(style["custom-active-slide"]);
      }

      // Update isEnd state
      const end =
        swiperRef.current.activeIndex + 1 === swiperRef.current.slides.length;
      setIsEnd(end);
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      // Run on initial load
      setTimeout(() => {
        handleSlideChange();
      }, 100);

      // Attach the event listener for transitions
      swiperRef.current.on("transitionEnd", handleSlideChange);
    }

    // Clean up the event listener on unmount
    return () => {
      if (swiperRef.current) {
        swiperRef.current.off("transitionEnd", handleSlideChange);
      }
    };
  }, [handleSlideChange]);

  return (
    <div className="w-full h-full relative">
      <Swiper
        speed={600}
        parallax={true}
        pagination={{ el: "#paginateRef", clickable: false }}
        dir="rtl"
        navigation={{
          nextEl: "#custom-swiper-page-next",
          prevEl: "#custom-swiper-page-prev",
        }}
        modules={[Parallax, Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        touchStartPreventDefault={true}
        touchMoveStopPropagation={true}
        simulateTouch={false}
        allowTouchMove={false}
        className="mySwiper !h-full !w-full"
      >
        <div
          slot="container-start"
          className={clsx(style["parallax-bg"])}
          style={{
            backgroundImage: "url(/menu-welcome-bg.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          dir="rtl"
          data-swiper-parallax="23%"
        ></div>
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={clsx(
              style["swiper-slide"],
              "!flex flex-col justify-end"
            )}
          >
            <WelcomeSwiperSlideCart
              title={slide.title}
              content={slide.content}
            />
          </SwiperSlide>
        ))}
        <button
          id={isEnd ? "" : "custom-swiper-page-next"}
          aria-label="next"
          onClick={() => {
            if (isEnd) {
              router.push("/barcode-scanner");
            } else {
              // swiperRef.current?.slideNext();
            }
          }}
          className="absolute bottom-0 w-full px-[22px] py-[26px] h-auto left-0 z-10 !flex justify-between items-center transition-all text-light-primary"
        >
          {isEnd ? (
            <span
              className="font-almarai font-bold text-lg w-full text-left cursor-pointer"
              onClick={() => router.push("/barcode-scanner")}
            >
              ثبت سفارش
            </span>
          ) : (
            <>
              <span className="font-almarai font-bold text-lg">بعدی</span>
              <Icon
                icon="simple-line-icons:arrow-left"
                width={24}
                height={24}
              />
            </>
          )}
        </button>
        <button id="custom-swiper-page-prev" className="!hidden"></button>

        <div
          id="paginateRef"
          className={clsx(
            style["custom-swiper-pagination"],
            "relative bottom-0 left-0 w-full"
          )}
        ></div>
      </Swiper>
    </div>
  );
};

export default WelcomeSwiperContainer;
