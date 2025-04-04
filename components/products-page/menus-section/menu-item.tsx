import ImageWithLoader from "@/components/image-with-loader/image-with-loader";
import { IMenu } from "@/types/menu/menu-types";
import { departmentsImageData } from "@/components/departments-page/departments-image-data";

interface IMenuItemProps {
  menu: IMenu;
}

const MenuItem = ({ menu }: IMenuItemProps) => {
  return (
    <div className="w-full h-full  relative ">
      <div className="w-full h-full absolute top-0 left-0">
        <ImageWithLoader
          src={
            departmentsImageData.find((image) => image.id === menu.menu_id)
              ?.image.src ?? ""
          }
          alt={menu.menu_name}
          width={100}
          height={100}
          imageClass="w-full h-full object-cover"
        />
      </div>
      <span className="w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center text-white font-Yekan-Medium text-sm z-[2] absolute bottom-0 left-0">
        {menu.menu_name}
      </span>
    </div>
  );
};

export default MenuItem;
