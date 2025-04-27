import { IMenu } from "@/types/menu/menu-types";
import Link from "next/link";
import ImageWithLoader from "../image-with-loader/image-with-loader";
import { memo } from "react";

interface MenuListItemComponentProps {
  depId: string;
  menu: IMenu;
}

const MenuListItemComponent: React.FC<MenuListItemComponentProps> = ({
  depId,
  menu,
}) => {
  return (
    <Link
      href={`/departments/${depId}/products`}
      prefetch={true}
      onClick={() => {
        localStorage.setItem("selectedMenuId", menu.menu_id.toString());
      }}
      className="w-full h-full "
    >
      <div className="w-full h-full flex justify-between items-center relative">
        <h2 className="text-light-primary-text flex flex-col gap-1 pr-4 absolute bottom-4 right-0 w-max bg-linear-gradient-to-left z-[2]">
          <span className="text-sm xs:text-lg font-Yekan-Medium">
            {menu.menu_name}
          </span>
          <span className="text-white text-sm xs:text-base max-w-[100px] xs:max-w-full whitespace-nowrap overflow-hidden text-ellipsis font-Yekan-Regular">
            {menu.menu_description}
          </span>
        </h2>
        <div className="w-full h-full absolute top-0 left-0">
          <ImageWithLoader
            src={menu.menu_image}
            alt={menu.menu_name}
            loading="lazy"
            fetchPriority="high"
            imageClass="object-cover w-full h-full"
          />
        </div>
      </div>
    </Link>
  );
};

const MemoizedMenuListItemComponent = memo(MenuListItemComponent);

export default MemoizedMenuListItemComponent;
