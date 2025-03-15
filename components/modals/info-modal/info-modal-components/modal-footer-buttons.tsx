import React from "react";

interface ModalFooterButtonsProps {
  onViewMenu: () => void;
  onShare: () => void;
}

const ModalFooterButtons = ({
  onViewMenu,
  onShare,
}: ModalFooterButtonsProps) => {
  return (
    <div className="flex justify-between w-full p-4 ">
      <button
        className="flex-1 py-2 px-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all"
        onClick={onViewMenu}
      >
        مشاهده منو / فروشگاه
      </button>
      <button
        className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
        onClick={onShare}
      >
        اشتراک‌گذاری منو / فروشگاه
      </button>
    </div>
  );
};

export default ModalFooterButtons;
