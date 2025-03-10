import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function ReturnKey() {
  const router = useRouter();
  return (
    <button
      className="text-xl p-2 rounded-lg  hover:bg-[#D0AC85] transition"
      onClick={() => router.back()}
    >
      <LeftOutlined />
    </button>
  );
}
