import { FiMenu } from "react-icons/fi";

export default function ToggleSidebar({
  onSidebarOpen,
}: {
  onSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className="text-2xl p-2 rounded-lg bg-[#E3C19C] hover:bg-[#D0AC85] transition"
      onClick={() => onSidebarOpen(true)}
    >
      <FiMenu />
    </button>
  );
}
