"use client";

import { useState } from "react";
import { Input, Button, Spin } from "antd";
import useSendOTP from "@/app/hooks/useSendOtp";

const PhoneInput = ({ onNext }: { onNext: (phone: string) => void }) => {
  const [phone, setPhone] = useState("");
  const { sendOTP, loading } = useSendOTP();
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  console.log(isFocused);

  const isValidPhone = (phone: string) => {
    return /^(09\d{9}|989\d{9}|\+98\d{10})$/.test(phone);
  };
  const handleSendOTP = () => {
    if (!isValidPhone(phone)) {
      setError("شماره موبایل معتبر نیست!");
      return;
    } else {
      sendOTP(phone);
      setError("null");
      onNext(phone); // بعد از ارسال، به مرحله بعد برو
    }
  };

  return (
    <div className="text-sm font-Yekan-Light flex flex-col gap-4">
      <p>برای ورود لطفا شماره موبایل خود را وارد کنید</p>
      <div className="relative">
        <label
          className={`absolute right-3  transition-all duration-300 bg-[#f0d9b0] z-10 ${
            isFocused || phone
              ? "-top-2 text-xs text-gray-500"
              : "top-2 text-gray-400"
          }`}
        >
          شماره موبایل
        </label>
        <Input
          value={phone}
          className="font-Yekan-Light"
          onChange={(e) => {
            setPhone(e.target.value);
            setError("");
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(phone.length > 0)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Button
        type="default"
        className="font-Yekan-Regular custom-drawer-login text-white w-full"
        onClick={handleSendOTP}
        disabled={phone.length > 10 ? false : true}
        loading={loading}
      >
        {loading ? <Spin /> : "ارسال کد تایید"}
      </Button>
    </div>
  );
};

export default PhoneInput;
