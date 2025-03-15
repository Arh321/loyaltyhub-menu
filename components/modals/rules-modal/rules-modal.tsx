"use client";
import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { closeModal } from "@/app/store/modalSlice";
import BranchLogo from "../info-modal/info-modal-components/branch-logo";
import BranchTitle from "../info-modal/info-modal-components/branch-title";
import styles from "./rules-modal.module.css";
interface modalProps {
  modalId: string;
  address?: string;
}

const RulesModal = ({ modalId }: modalProps) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: RootState) => state.modal.openModals[modalId] || false
  );

  return (
    <Modal
      open={isModalOpen}
      footer={null}
      onCancel={() => dispatch(closeModal(modalId))}
      className="custom-rules-modal font-Yekan-Regular relative py-2 "
      closeIcon={
        <span className=" text-white hover:text-white p-2 rounded-lg "></span>
      }
    >
      <div className="flex flex-col items-center text-center p-6 text-white">
        {/* لوگو */}
        <BranchLogo className="shadow-lg bg-[#f0d9b0] " />

        {/* عنوان */}
        <BranchTitle title="کافه مرکزی" />

        {/* متن توضیحات */}
        <p className="text-sm mt-3">
          قابل توجه مهمانان کافه مرکزی، زمان آماده سازی سفارش ۳۵ دقیقه می‌باشد.
        </p>
      </div>
    </Modal>
  );
};

export default RulesModal;
