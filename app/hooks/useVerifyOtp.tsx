import { useState } from "react";

const useVerifyOTP = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const verifyOTP = async (otp: string) => {
    setLoading(true);
    setError(null);

    try {
      // 🔹 هر عدد ۵ رقمی‌ای رو قبول کن
      if (/^\d{5}$/.test(otp)) {
        setSuccess(true);
        localStorage.setItem("token", "11111"); // ✅ لاگین شدن رو در سشن ذخیره کن
      } else {
        throw new Error("کد باید ۵ رقمی باشد!");
      }
    } catch (err: string) {
      setError(err.message || "مشکلی پیش آمده است.");
    } finally {
      setLoading(false);
    }
  };

  return { verifyOTP, loading, error, success };
};

export default useVerifyOTP;
