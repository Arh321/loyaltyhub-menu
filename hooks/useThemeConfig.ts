import { getCompanies } from "@/api/companyService";
import { ICompany } from "@/types/company-type";
import { IHttpResult } from "@/types/http-result";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  setCompany,
  setCompanyLogo,
  setCompanyVat,
} from "@/redux/company-slice/companySlice";
import { usePathname } from "next/navigation";
import { initBasket } from "@/redux/basket-slice/basketSlice";
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

  const parsedConfig = useMemo(() => {
    return JSON.parse(companyData?.result?.[0]?.config ?? "{}");
  }, [companyData]);

  const dispatch = useDispatch();
  const pathname = usePathname();

  const setThemeConfig = useCallback(() => {
    const root = document.documentElement;
    let currentThemeConfig = defaultThemeConfig;

    if (companyData?.result?.[0]?.config) {
      if (parsedConfig.generalConfigs.image_url) {
        dispatch(setCompanyLogo(parsedConfig.generalConfigs.image_url));
      }
      if (parsedConfig.generalConfigs.hasVat) {
        dispatch(setCompanyVat(parsedConfig.generalConfigs.vat));
      }

      currentThemeConfig = {
        ...defaultThemeConfig,
        ...parsedConfig.themeConfigs,
        ...(parsedConfig.themeConfigs.mode === "dark" ? darkThemeConfig : {}),
      };

      const themeProperties = {
        "--primary-hover": `${currentThemeConfig.primary}dd`,
        "--primary": currentThemeConfig.primary,
        "--primary-disabled": `${currentThemeConfig.primary}60`,
        "--primary-text": currentThemeConfig.primaryText,
        "--secondary": currentThemeConfig.secondary,
        "--secondary-text": currentThemeConfig.secondaryText,
        "--gray": currentThemeConfig.gray,
        "--background-theme": currentThemeConfig.background,
        "--white": currentThemeConfig.white,
        "--text": currentThemeConfig.text,
      };

      Object.entries(themeProperties).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  }, [companyData, dispatch, parsedConfig]);

  const checkWelcomeModal = useCallback(() => {
    const sessionKey = "welcomeModalShown";

    const isWelcomeModalShown = sessionStorage.getItem(sessionKey);

    if (isWelcomeModalShown) {
      return;
    }

    if (
      parsedConfig.generalConfigs.hasWellcomeText &&
      pathname.includes("/departments/")
    ) {
      setWelcomeModal({
        isOpen: true,
        title: parsedConfig.generalConfigs.wellcomeText,
        description: parsedConfig.generalConfigs.wellcomeTextPos,
      });
      sessionStorage.setItem(sessionKey, "true");
    }
  }, [parsedConfig, pathname]);

  const handleInitBasket = useCallback(() => {
    const basket = localStorage.getItem("basket");
    if (basket) {
      dispatch(initBasket(JSON.parse(basket)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && !isRefetching) {
      setThemeConfig();
      if (companyData?.result?.[0]) {
        dispatch(setCompany(companyData.result[0]));
      }
      checkWelcomeModal();
      handleInitBasket();
    }
  }, [
    companyData,
    dispatch,
    setThemeConfig,
    isLoading,
    isRefetching,
    checkWelcomeModal,
  ]);

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
