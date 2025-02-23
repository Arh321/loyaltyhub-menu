import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function ReturnKey() {
  const router = useRouter();
  return (
    <button
      className="text-2xl p-2 rounded-lg bg-[#E3C19C] hover:bg-[#D0AC85] transition"
      onClick={() => router.back()}
    >
      <FiArrowLeft />
    </button>
  );
}
