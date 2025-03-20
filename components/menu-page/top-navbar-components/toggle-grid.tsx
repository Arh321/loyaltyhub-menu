import { setMenuData } from "@/app/store/menuSlice";
import { RootState } from "@/app/store/store";
import { AppstoreFilled, UnorderedListOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

export default function ToggleGrid() {
  const menu = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`text-2xl p-2 rounded-lg transition 
        ${menu.gridCols === 2 ? " hover:bg-[#D0AC85]" : " hover:bg-[#C49770]"}`}
        onClick={() =>
          dispatch(setMenuData({ gridCols: menu.gridCols === 2 ? 1 : 2 }))
        }
      >
        {menu.gridCols === 2 ? <AppstoreFilled /> : <UnorderedListOutlined />}
      </button>
    </>
  );
}
