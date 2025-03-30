import { getCompanies } from "@/api/companyService";
import { ICompany } from "@/types/company-type";
import { IHttpResult } from "@/types/http-result";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const defaultThemeConfig = {
  primary: "#005B4C",
  primaryText: "#ffffff",
  secondary: "#f0d9b1",
  secondaryText: "#000000",
  gray: "#4b4b4d",
  background: "#f0d9b1",
  white: "#000000",
  text: "black",
  id: 3,
  mode: "light",
};

const darkThemeConfig = {
  primary: "#05a3d4",
  primaryText: "#ffffff",
  secondary: "#1e193b",
  secondaryText: "#ffffff",
  gray: "#afafb9",
  background: "#1e193b",
  white: "#ffffff",
  text: "white",
  id: 5,
  mode: "dark",
};

const useThemeConfig = () => {
  const {
    data: companyData,
    isLoading,
    isRefetching,
    isError,
    error,
    refetch,
  } = useQuery<IHttpResult<ICompany[]>>({
    queryKey: ["companies"],
    queryFn: () => getCompanies(),
    refetchOnWindowFocus: false,
  });

  const setThemeConfig = () => {
    const root = document.documentElement;
    let currentThemeConfig = defaultThemeConfig;

    if (companyData?.result?.[0]?.config) {
      // Parse config string to theme config object
      const parsedConfig = JSON.parse(companyData.result[0].config);
      // Use company theme config if it exists
      currentThemeConfig =
        parsedConfig.mode === "dark" ? darkThemeConfig : parsedConfig;
    }

    root.style.setProperty("--primary", currentThemeConfig.primary);
    root.style.setProperty(
      "--primary-hover",
      `${currentThemeConfig.primary}dd`
    );
    root.style.setProperty(
      "--primary-disabled",
      `${currentThemeConfig.primary}60`
    );
    root.style.setProperty("--primary-text", currentThemeConfig.primaryText);
    root.style.setProperty("--secondary", currentThemeConfig.secondary);
    root.style.setProperty(
      "--secondary-text",
      currentThemeConfig.secondaryText
    );
    root.style.setProperty("--gray", currentThemeConfig.gray);
    root.style.setProperty("--background-theme", currentThemeConfig.background);
    root.style.setProperty("--white", currentThemeConfig.white);
    root.style.setProperty("--text", currentThemeConfig.text);
  };

  useEffect(() => {
    setThemeConfig();
  }, [companyData]);

  return {
    data: companyData,
    isLoading,
    isRefetching,
    isError,
    error,
    refetch,
  };
};

export default useThemeConfig;
