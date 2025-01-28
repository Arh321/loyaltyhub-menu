import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enables dark mode with a 'class' strategy
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top, black, transparent)",
        "welcome-slide-linear":
          "linear-gradient(to right, rgb(0,0,0,0.1), rgb(0,0,0))",
      },
      fontFamily: {
        almarai: ['"Almarai"', ...defaultTheme.fontFamily.sans],
        "Yekan-Regular": "Regular",
        "Yekan-Bold": "Bold",
        "Yekan-Light": "Light",
        "Yekan-Medium": "Medium",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        bold: "700",
        extrabold: "800",
      },
      colors: {
        light: {
          primary: "#FFFFFF",
          secondary: "#6E6E70",
          Tritary: "#26262D",
          background: "#151518",
          cta: "#B70F0F",
          text: "#333333",
          accent: "#F3F4F6",
        },
        dark: {
          primary: "#1C1C29",
          secondary: "#D4DCC0",
          Tritary: "#F3F3F3",
          highliter: "#FFFFFF",
          background: "#F0F0F0",
          cta: "#FF8754",
          text: "#333333",
          accent: "#F3F4F6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
