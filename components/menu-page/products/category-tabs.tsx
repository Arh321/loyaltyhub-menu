// import React from "react";
// import { Tabs } from "antd";
// import type { TabsProps } from "antd";

// const onChange = (key: string) => {
//   console.log(key);
// };

// const items: TabsProps["items"] = [
//   {
//     key: "1",
//     label: "Tab 1",
//     children: "Content of Tab Pane 1",
//   },
//   {
//     key: "2",
//     label: "Tab 2",
//     children: "Content of Tab Pane 2",
//   },
//   {
//     key: "3",
//     label: "Tab 3",
//     children: "Content of Tab Pane 3",
//   },
// ];

// const App: React.FC = () => (
//   <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
// );

// export default App;

import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "@/app/types/api-menu/menu";
import { setMenuData } from "@/app/store/menuSlice";
import { RootState } from "@/app/store/store";

const CategoryTabs = ({
  categories,
  selectedCategory,
}: {
  categories: Category[];
  selectedCategory: number | null;
}) => {
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.menu);
  // console.log(categories);
  // console.log(" these are my categories");
  return (
    <div className="flex overflow-x-auto gap-4 p-2 border-b" dir="rtl">
      {categories?.map((category: Category) => (
        <button
          key={category.category_id}
          onClick={() => {
            dispatch(
              setMenuData({ ...menu, selectedCategory: category.category_id })
            );
          }}
          className={`flex flex-col items-center space-y-1  rounded-md `}
        >
          <div
            className={`  ${
              menu.selectedCategory === category.category_id
                ? "border border-black rounded-lg p-1"
                : "border border-transparent p-1"
            }`}
          >
            <Image
              // src={category.image}
              src={"/images/hamburger-test.jpg"}
              alt={category.category_name}
              width={40}
              height={40}
              className="rounded-md !aspect-square "
            />
          </div>
          <span className="text-[10px] font-almarai text-black font-bold ">
            {category.category_name}
          </span>
        </button>
      ))}
    </div>
  );
};
export default CategoryTabs;
