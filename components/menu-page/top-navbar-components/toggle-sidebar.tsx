import { FiMenu } from "react-icons/fi";
import SideBar from "../page-layout.tsx/side-bar";
import { MenuOutlined } from "@ant-design/icons";
import { openModal } from "@/app/store/modalSlice";
import { useDispatch } from "react-redux";

export default function ToggleSidebar({
  
  branchName,
  
}: {
  onSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch=useDispatch();
  return (
    <>
      <button
        className="text-2xl p-2 rounded-lg hover:bg-[#D0AC85] transition "
        onClick={() => {dispatch(openModal("Sidebar")); }}
      >
        <MenuOutlined />
      </button>
      <SideBar
        branchName={branchName}
        
      />
    </>
  );
}
