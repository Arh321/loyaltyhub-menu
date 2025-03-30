"use client";
import useThemeConfig from "@/hooks/useThemeConfig";

const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  useThemeConfig();

  return children;
};

export default ConfigProvider;
