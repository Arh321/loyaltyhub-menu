"use client";

import { useState } from "react";
import { Input, Button } from "antd";
import useSendOTP from "@/app/hooks/useSendOtp";

const PhoneInput = ({ onNext }: { onNext: (phone: string) => void }) => {
  const [phone, setPhone] = useState("");
  const { sendOTP, loading } = useSendOTP();

  const handleSendOTP = () => {
    sendOTP(phone);
    onNext(phone); // بعد از ارسال، به مرحله بعد برو
  };

  return (
    <div>
      <Input
        placeholder="شماره موبایل"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button
        type="default"
        className="font-Yekan-Regular"
        onClick={handleSendOTP}
        loading={loading}
        style={{ marginTop: 16 }}
      >
        ارسال کد تایید
      </Button>
    </div>
  );
};

export default PhoneInput;
