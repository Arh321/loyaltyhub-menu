"use client";
import { useParams, useRouter } from "next/navigation";
import { useMenus } from "@/hooks/useMenus";
import ErrorComponent from "../shared-components/error-component/error-component";
import { useMemo, useState } from "react";
import { Skeleton } from "antd";
import Image, { StaticImageData } from "next/image";
import { departmentsImageData } from "../departments-page/departments-image-data";
import clsx from "clsx";
import MenusListHeader from "./menus-list-header";

const MenusContainer = () => {
  const [isGrid, setIsGrid] = useState(false);
  const { depId } = useParams();
  const router = useRouter();

  const { data, isLoading, isError, refetch, isRefetching } = useMenus(
    Number(depId)
  );

  const menus = useMemo(() => {
    console.log(data);
    return data?.result?.filter((menu) => menu.menu_id !== null);
  }, [data]);

  if (isError) {
    return <ErrorComponent refetch={() => refetch()} />;
  }

  return (
    <>
      <MenusListHeader isGrid={isGrid} setIsGrid={setIsGrid} />
      <div className="flex flex-col gap-4 h-max pb-4 px-4">
        {isLoading || isRefetching ? (
          <div className="flex flex-col gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-full aspect-[16/7] xs:aspect-[16/3] "
              >
                <Skeleton.Node active className="!w-full !h-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-max ">
            <div
              className={clsx(
                "grid grid-cols-1 gap-4 h-max transition-all",
                isGrid ? "grid-cols-2" : "grid-cols-1"
              )}
            >
              {menus?.map((menu, index) => (
                <div
                  key={index}
                  onClick={() => {
                    localStorage.setItem(
                      "selectedMenuId",
                      menu.menu_id.toString()
                    );
                    router.push(`/departments/${depId}/products`);
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
                      <Image
                        src={
                          departmentsImageData.find(
                            (image) => image.id === menu.menu_id
                          )?.image as StaticImageData
                        }
                        alt={menu.menu_name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MenusContainer;
