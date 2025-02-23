import { FiGrid } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";

export default function ToggleGrid({
  gridCols,
  onGridCols,
}: {
  gridCols: number;
  onGridCols: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <button
      className={`text-2xl p-2 rounded-lg transition 
                      ${
                        gridCols === 2
                          ? "bg-[#E3C19C] hover:bg-[#D0AC85]"
                          : "bg-[#D0AC85] hover:bg-[#C49770]"
                      }`}
      onClick={() => onGridCols(gridCols === 2 ? 1 : 2)}
    >
      {gridCols === 2 ? <FiGrid /> : <TfiMenuAlt />}
    </button>
  );
}
