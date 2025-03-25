import React from "react";
import { IoMdShare } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface ModalFooterButtonsProps {
  onViewMenu: () => void;
  onShare: () => void;
}

const ModalFooterButtons = ({
  onViewMenu,
  onShare,
}: ModalFooterButtonsProps) => {
  return (
    <div className="flex  flex-col xs:flex-row gap-2 items-center w-full p-4 absolute bottom-0 left-0 right-0">
      <button
        className="flex gap-2 justify-center items-center py-[10px] w-full bg-[#005b4c] text-white rounded-lg hover:brightness-75 transition-all text-base"
        onClick={onViewMenu}
      >
        <MdOutlineRemoveRedEye size="20px" />
        مشاهده منو / فروشگاه
      </button>
      <button
        className="flex gap-2 justify-center items-center py-[10px] w-full bg-[#fae3ba] border border-[#005f4e] hover:bg-[#c1a990] text-gray-700 rounded-lg  transition-all text-base"
        onClick={onShare}
      >
        <IoMdShare size="20px" />
        اشتراک‌گذاری منو / فروشگاه
      </button>
    </div>
  );
};

export default ModalFooterButtons;
