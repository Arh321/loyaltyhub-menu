import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useWelcome = () => {
  const router = useRouter();

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");
    if (!hasSeenModal) {
      router.push("/welcome");
    }
  }, [router]); // به router بستگی داره ولی مشکلی ایجاد نمی‌کنه
};

export default useWelcome;
