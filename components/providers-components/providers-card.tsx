import { openModal } from "@/app/store/modalSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

interface ProvidersCardProps {
  name: string;
  imageSrc: string;
  cardDestination: number; // تغییر به string
}

const ProvidersCard: React.FC<ProvidersCardProps> = ({
  name,
  imageSrc,
  cardDestination,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClick = () => {
    router.push(`/menu/${cardDestination}`);
    dispatch(openModal("RulesModal"));
  };

  return (
    <div
      className="bg-[#232323] flex items-center gap-4 p-2 rounded-full w-full hover:scale-[.95] transition-all justify-between relative cursor-pointer text-base font-Yekan-Bold"
      onClick={handleClick} // استفاده از تابع جداگانه برای مدیریت کلیک
    >
      {/* متن در وسط */}
      <span className="text-base text-white text-center flex-grow">{name}</span>

      {/* عکس در انتها */}
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative">
        <Image
          src={imageSrc}
          className="object-cover"
          layout="fill"
          alt="provider pic"
        />
      </div>
    </div>
  );
};

export default ProvidersCard;
