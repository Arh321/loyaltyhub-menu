import { getCompanies } from "@/api/companyService";
import { ICompany } from "@/types/company-type";
import { IHttpResult } from "@/types/http-result";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCompany,
  setCompanyLogo,
  setCompanyVat,
} from "@/redux/company-slice/companySlice";

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
  image_url: "",
};

interface IParsedConfig {
  themeConfigs: {
    primary: string;
    primaryText: string;
    background: string;
    mode: string;
    secondary: string;
    secondaryText: string;
    gray: string;
    text: string;
    white: string;
  };
  generalConfigs: {
    image_url: string;
    hasVat: boolean;
    vat: string;
    hasWellcomeText: boolean;
    wellcomeText: string;
    wellcomeTextPos: string;
  };
}

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

  const [welcomeModal, setWelcomeModal] = useState({
    isOpen: false,
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const setThemeConfig = () => {
    const root = document.documentElement;
    let currentThemeConfig = defaultThemeConfig;

    if (companyData?.result?.[0]?.config) {
      // Parse config string to theme config object
      const parsedConfig: IParsedConfig = JSON.parse(
        companyData.result[0].config
      );

      if (parsedConfig.generalConfigs.image_url) {
        dispatch(setCompanyLogo(parsedConfig.generalConfigs.image_url));
      }
      if (parsedConfig.generalConfigs.hasVat) {
        dispatch(setCompanyVat(parsedConfig.generalConfigs.vat));
      }
      if (parsedConfig.generalConfigs.hasWellcomeText) {
        setWelcomeModal({
          isOpen: true,
          title: parsedConfig.generalConfigs.wellcomeText,
          description: parsedConfig.generalConfigs.wellcomeTextPos,
        });
      }
      // Use company theme config if it exists
      currentThemeConfig = {
        ...defaultThemeConfig,
        ...parsedConfig.themeConfigs,
        ...(parsedConfig.themeConfigs.mode === "dark" ? darkThemeConfig : {}),
      };
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
      root.style.setProperty(
        "--background-theme",
        currentThemeConfig.background
      );
      root.style.setProperty("--white", currentThemeConfig.white);
      root.style.setProperty("--text", currentThemeConfig.text);
    }
  };

  useEffect(() => {
    setThemeConfig();
    if (companyData?.result?.[0]) {
      dispatch(setCompany(companyData.result[0]));
    }
  }, [companyData]);

  return {
    data: companyData,
    isLoading,
    isRefetching,
    isError,
    error,
    refetch,
    welcomeModal,
    setWelcomeModal,
  };
};

export default useThemeConfig;
