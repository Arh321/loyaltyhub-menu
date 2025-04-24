import { useMenus } from "@/hooks/useMenus";
import { memo, useMemo } from "react";
import ErrorComponent from "../shared-components/error-component/error-component";
import { useParams } from "next/navigation";
import clsx from "clsx";
import ImageWithLoader from "../image-with-loader/image-with-loader";
import Link from "next/link";
import MenuListLoader from "./menu-list-loader";

interface MenuListItemsContainerProps {
  isGrid: boolean;
}

const MenuListItemsContainer: React.FC<MenuListItemsContainerProps> = ({
  isGrid,
}) => {
  const { depId } = useParams();

  const { data, isFetching, isError, refetch } = useMenus(Number(depId));

  const menus = useMemo(() => {
    return data?.result?.filter((menu) => menu.menu_id !== null);
  }, [data]);

  if (isFetching) return <MenuListLoader />;
  if (isError) {
    return <ErrorComponent refetch={() => refetch()} />;
  }
  return (
    <div className="flex flex-col gap-4 h-max pb-4 px-4">
      <div className="w-full h-max ">
        {menus && menus.length > 0 ? (
          <div
            className={clsx(
              "grid grid-cols-1 gap-4 h-max transition-all",
              isGrid ? "grid-cols-2" : "grid-cols-1"
            )}
          >
            {menus?.map((menu, index) => (
              <Link
                href={`/departments/${depId}/products`}
                prefetch={true}
                key={index}
                onClick={() => {
                  localStorage.setItem(
                    "selectedMenuId",
                    menu.menu_id.toString()
                  );
                }}
                className={clsx(
                  "w-full aspect-[16/7] xs:aspect-[16/5] bg-gray-100 rounded-lg overflow-hidden transition-all",
                  isGrid && "!aspect-[4/3]"
                )}
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
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center translate-y-1/2">
            <ImageWithLoader
              placeHolderSize={{
                height: 100,
                width: 100,
              }}
              alt="Logo"
              imageClass="w-[100px] h-[100px] z-10 !bg-transparent"
            />
            <h3 className="font-Yekan-Medium text-light-white">
              در حال حاضر در این شعبه منو فعالی وجود ندارد
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(MenuListItemsContainer);
