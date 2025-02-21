import axios from "axios";

// ✅ تعریف بیس آدرس API
const API_BASE_URL = "https://dashboardapi.loyaltyhub.ir/digital-menu";

// ✅ ایجاد یک نمونه Axios با تنظیمات پیش‌فرض
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // ⏳ تنظیم تایم‌اوت برای درخواست‌ها
});

// ✅ اینترسپتور برای مدیریت توکن (در صورت نیاز)
apiClient.interceptors.request.use(
  (config) => {
    // اگر توکن در لوکال استوریج یا کوکی ذخیره شده باشد
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ اینترسپتور برای مدیریت خطاهای درخواست‌ها
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "خطا در دریافت اطلاعات API:",
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);
