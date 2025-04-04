import { IMenu } from "@/types/menu/menu-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import MenuItem from "./menu-item";
import styles from "./menus-swiper.module.css";
interface IMenusSectionContainerProps {
  menus: IMenu[];
  selectedMenu: IMenu | null;
  setSelectedMenu: (menu: IMenu) => void;
}

const MenusSectionContainer = ({
  menus,
  selectedMenu,
  setSelectedMenu,
}: IMenusSectionContainerProps) => {
  const initialSlide = menus.findIndex(
    (menu) => menu.menu_id === selectedMenu?.menu_id
  );
  const handleSlideChange = (swiper: SwiperType) => {
    setSelectedMenu(menus[swiper.activeIndex]);
  };
  return (
    <div className="w-full relative">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          480: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
        }}
        centeredSlides={true}
        slideToClickedSlide={true}
        spaceBetween={25}
        initialSlide={initialSlide}
        onSlideChange={handleSlideChange}
        className={styles["menus-section-container"]}
        allowTouchMove={false}
      >
        {menus.map((menu) => (
          <SwiperSlide key={menu.menu_id}>
            <MenuItem menu={menu} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MenusSectionContainer;
