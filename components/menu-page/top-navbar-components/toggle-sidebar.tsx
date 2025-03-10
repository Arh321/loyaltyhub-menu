import { FiMenu } from "react-icons/fi";
import SideBar from "../page-layout.tsx/side-bar";
import { MenuOutlined } from "@ant-design/icons";

export default function ToggleSidebar({
  onSidebarOpen,
  branchName,
  sidebarOpen,
  setSidebarOpen,
}: {
  onSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <button
        className="text-2xl p-2 rounded-lg hover:bg-[#D0AC85] transition "
        onClick={() => onSidebarOpen(true)}
      >
        <MenuOutlined />
      </button>
      <SideBar
        branchName={branchName}
        sidebarOpen={sidebarOpen}
        onSidebarOpen={setSidebarOpen}
      />
    </>
  );
}
