"use client";

import { useEffect, useState } from "react";
import { Input, Button, message, Spin } from "antd";
import useVerifyOTP from "@/app/hooks/useVerifyOtp";
import Timer from "./timer";

const OTPInput = ({
  phone,
  onBack,
  onSuccess,
}: {
  phone: string;
  onBack: () => void;
  onSuccess: () => void;
}) => {
  const [otp, setOtp] = useState("");
  const [resend, setResend] = useState(false);
  const { verifyOTP, loading, success, error } = useVerifyOTP();

  const handleVerify = () => {
    verifyOTP(otp);
    if (success) {
      message.success("ورود موفقیت‌آمیز بود!");
      onSuccess();
    } else {
      message.error(error);
      setOtp("");
    }
  };
  useEffect(() => {
    if (otp.length === 5) {
      verifyOTP(otp);
    }
  }, [otp, verifyOTP]); // 🔹 این useEffect فقط وقتی otp تغییر کند اجرا می‌شود

  // ✅ بعد از تأیید موفق، کاربر را به مرحله بعد ببرد
  // useEffect(() => {
  //   if (success) {
  //     message.success("ورود موفقیت‌آمیز بود!");
  //     onSuccess();
  //   }
  // }, [success, onSuccess]);

  return (
    <div className="flex flex-col font-Yekan-Light">
      <p>کد تایید برای شماره {phone} ارسال شد</p>

      <Input
        placeholder="کد تایید"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <div className="w-full justify-between items-center">
        <button onClick={() => onBack()} className="font-Yekan-Light text-sm">
          ویرایش شماره موبایل
        </button>

        {resend ? (
          <span onClick={onBack}>ارسال مجدد کد</span>
        ) : (
          <Timer onFinish={() => setResend(true)} />
        )}
      </div>

      <Button
        type="default"
        className="font-Yekan-Regular custom-drawer-login text-white w-full"
        onClick={handleVerify}
        loading={loading}
      >
        {loading ? <Spin /> : "ورود"}
      </Button>
    </div>
  );
};

export default OTPInput;
