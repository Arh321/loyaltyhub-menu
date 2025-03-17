import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isAuthenticated) {
      timeout = setTimeout(
        () => {
          localStorage.removeItem("isAuthenticated");
          setIsAuthenticated(false);
        },
        30 * 60 * 1000
      ); // 30 دقیقه
    }

    return () => clearTimeout(timeout);
  }, [isAuthenticated]);

  return { isAuthenticated, setIsAuthenticated };
};

export default useAuth;
