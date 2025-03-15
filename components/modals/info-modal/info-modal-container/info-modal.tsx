"use client";
import { Modal } from "antd";
import React from "react";
import HoverImage from "../info-modal-components/hover-image";
import BranchLogo from "../info-modal-components/branch-logo";
import OpenCloseTag from "../info-modal-components/open-close-tag";
import BranchTitle from "../info-modal-components/branch-title";
import AddressSection from "../info-modal-components/address-section";
import ActionButtons from "../info-modal-components/action-buttons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { closeModal } from "@/app/store/modalSlice";
import styles from "./info-modal.module.css";
import ModalFooterButtons from "../info-modal-components/modal-footer-buttons";
import { usePathname } from "next/navigation";
interface modalProps {
  modalId: string;
  address?: string;
}

const InfoModal = ({ modalId }: modalProps) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: RootState) => state.modal.openModals[modalId] || false
  );

  const pathname = usePathname(); // گرفتن مسیر فعلی
  const currentUrl =
    typeof window !== "undefined" ? window.location.origin + pathname : "";

  const handleShare = async () => {
    const shareData = {
      title: "دیجیتال منو",
      text: "اشتراک گذاری محصول ",
      url: currentUrl, // لینکی که می‌خوای به اشتراک بذاری
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("خطا در اشتراک‌گذاری:", error);
      }
    } else {
      alert("مرورگر شما از اشتراک‌گذاری بومی پشتیبانی نمی‌کند.");
    }
  };
  const handleViewMenu = () => {
    dispatch(closeModal(modalId));
  };
  return (
    <Modal
      open={isModalOpen}
      footer={null}
      onCancel={() => dispatch(closeModal(modalId))}
      className={`font-Yekan-Regular ${styles.modalContainer}`}
      bodyStyle={{
        height: "calc(100vh - 48px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "auto",
        backgroundColor: "#f0d9b0",
      }} // ارتفاع تنظیم شده
      closeIcon={<span className="hidden"></span>}
    >
      {/* تصویر بالایی */}

      <div className="relative">
        <HoverImage />

        <OpenCloseTag isOpen={false} />
        <BranchLogo />
      </div>
      {/* اطلاعات رستوران */}
      <div className="flex flex-col items-center">
        <BranchTitle title="باهارات کافه رستوران" />
      </div>

      {/* جزئیات */}
      <AddressSection />
      <ActionButtons />

      <ModalFooterButtons onViewMenu={handleViewMenu} onShare={handleShare} />
    </Modal>
  );
};

export default InfoModal;
