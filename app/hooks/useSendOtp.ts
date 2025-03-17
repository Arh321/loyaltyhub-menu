import { useState } from "react";

const API_URL = "https://dashboardapi.loyaltyhub.ir/users/register-or-verify/";

const useSendOTP = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendOTP = async (phone: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone_number: phone }),
      });

      if (!response.ok) throw new Error("خطا در ارسال کد!");

      // 📌 اینجا باید مقدار OTP رو ذخیره کنیم، ولی فعلاً نیازی نیست چکش کنیم
      // const data = await response.json();
      // console.log("OTP RECEIVED:", data.verification_code);
    } catch (err: any) {
      setError(err.message || "مشکلی پیش آمده است.");
    } finally {
      setLoading(false);
    }
  };

  return { sendOTP, loading, error };
};

export default useSendOTP;
