"use client";

import { useEffect, useState } from "react";
import { Input, Button, message, Spin } from "antd";
import useVerifyOTP from "@/app/hooks/useVerifyOtp";
import Timer from "./timer";
import { truncate } from "fs";

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
      message.error("کد امنیتی اشتباه است");
      setOtp("");
    }
  };
  useEffect(() => {
    if (otp.length === 5) {
      verifyOTP(otp);
    }
  }, [otp]); // 🔹 این useEffect فقط وقتی otp تغییر کند اجرا می‌شود

  // ✅ بعد از تأیید موفق، کاربر را به مرحله بعد ببرد
  useEffect(() => {
    if (success) {
      message.success("ورود موفقیت‌آمیز بود!");
      onSuccess();
    }
  }, [success]);

  return (
    <div>
      <Input
        placeholder="کد تایید"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      {loading ? (
        <Spin />
      ) : (
        <Button
          type="default"
          disabled={resend ? false : true}
          style={{ marginTop: 16 }}
          onClick={() => onBack()}
        >
          ویرایش شماره موبایل
        </Button>
      )}

      <div>
        <Timer onFinish={() => setResend(true)} />
        {resend && (
          <Button type="link" onClick={onBack}>
            ارسال مجدد کد
          </Button>
        )}
      </div>
    </div>
  );
};

export default OTPInput;
