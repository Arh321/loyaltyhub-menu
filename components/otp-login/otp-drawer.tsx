"use client";

import { useState } from "react";
import { Drawer } from "antd";
import PhoneInput from "./phone-input";
import OTPInput from "./otp-input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { closeModal } from "@/app/store/modalSlice";

const OTPDrawer = ({}: {}) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const open = useSelector(
    (state: RootState) => state.modal.openModals["OTPDrawer"] || false
  );
  return (
    <Drawer
      placement="bottom"
      open={open}
      onClose={() => dispatch(closeModal("OTPDrawer"))}
      height="30vh"
      className="font-Yekan-Regular custom-drawer-login"
      bodyStyle={{
        height: "30vh",
        maxHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "auto",
        backgroundColor: "#f0d9b0",
      }} // ارتفاع تنظیم شده
    >
      {step === 1 ? (
        <PhoneInput
          onNext={(phone) => {
            setPhone(phone);
            setStep(2);
          }}
        />
      ) : (
        <OTPInput
          phone={phone}
          onBack={() => setStep(1)}
          onSuccess={() => dispatch(closeModal("OTPDrawer"))}
        />
      )}
    </Drawer>
  );
};

export default OTPDrawer;
