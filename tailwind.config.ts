import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "class"], // Enables dark mode with a 'class' strategy
  theme: {
    extend: {
      screens: {
        vld: "0px",
        lxs: "375px",
        xs: "460px", // breakpoint برای صفحه‌های کوچک‌تر از 400px
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top, black, transparent)",
        "welcome-slide-linear":
          "linear-gradient(to right, rgb(0,0,0,0.9), transparent)",
        "linear-gradient-to-top":
          "linear-gradient(to top, rgb(0,0,0), transparent)",
        "linear-gradient-to-bottom":
          "linear-gradient(to bottom, rgb(0,0,0,0.9), transparent)",
        "linear-gradient-to-left":
          "linear-gradient(to left, rgb(0,0,0,0.9), transparent)",
        "linear-gradient-to-right":
          "linear-gradient(to right, rgb(0,0,0,0.9), transparent)",
      },
      fontFamily: {
        "Almarai-Bold": ["Almarai-Bold", "sans-serif"],
        "Almarai-ExtraBold": ["Almarai-ExtraBold", "sans-serif"],
        "Almarai-Light": ["Almarai-Light", "sans-serif"],
        "Almarai-Regular": ["Almarai-Regular", "sans-serif"],
        "Yekan-Regular": "Regular",
        "Yekan-Bold": "Bold",
        "Yekan-Light": "Light",
        "Yekan-Medium": "Medium",
        "Yekan-Demi-Bold": ["Demi-Bold", "sans-serif"],
        "Yekan-Extra-Black": ["Extra-Black", "sans-serif"],
        "Yekan-Extra-Bold": ["Extra-Bold", "sans-serif"],
        "Yekan-Heavy": ["Heavy", "sans-serif"],
        "Yekan-Thin": ["Thin", "sans-serif"],
        "Yekan-Ultra-Light": ["Ultra-Light", "sans-serif"],
      },
      colors: {
        light: {
          background: "var(--background-theme)",
          foreground: "var(--foreground)",
          primary: "var(--primary)",
          "primary-disabled": "var(--primary-disabled)",
          "primary-hover": "var(--primary-hover)",
          "primary-text": "var(--primary-text)",
          secondary: "var(--secondary)",
          "secondary-text": "var(--secondary-text)",
          gray: "var(--gray)",
          white: "var(--white)",
          text: "var(--text)",
        },
        dark: {
          background: "var(--background-dark)",
          foreground: "var(--foreground-dark)",
          primary: "var(--primary-dark)",
          "primary-disabled": "var(--primary-disabled-dark)",
          "primary-hover": "var(--primary-hover-dark)",
          "primary-text": "var(--primary-text-dark)",
          secondary: "var(--secondary-dark)",
          "secondary-text": "var(--secondary-text-dark)",
          gray: "var(--gray-dark)",
          white: "var(--white-dark)",
          text: "var(--text-dark)",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeUp: {
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        popIn: {
          "0%": {
            top: "80%",
            "z-index": "-1",
          },
          "90%": {
            top: "100%",
          },
          "100%": {
            "z-index": "1",
          },
        },
        movable: {
          "0%": {
            transform: "translateY(-2px)",
          },
          "50%": {
            transform: "translateY(2px)",
          },
          "100%": {
            transform: "translateY(-2px)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-4px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeUp: "fadeUp 0.3s ease-in-out forwards",
        "fadeIn-repetive": "fadeIn 2s ease-in-out",
        movable: "movable 3s infinite",
        popIn: "popIn 0.7s ease-in-out",
        marquee: "marquee 5s linear infinite",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities(
        {
          ".no-scrollbar": {
            "-ms-overflow-style": "none" /* IE و Edge */,
            "scrollbar-width": "none" /* فایرفاکس */,
          },
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none" /* مرورگرهای Webkit */,
          },
          ".border-gradient-secondary": {
            border: " 0 0 4px 0 solid transparent",
            borderImage:
              "linear-gradient(90deg, rgba(30,156,81,0.1) 0%, rgba(161,161,161,1) 50%, rgba(30,156,81,0.1) 100%) 1",
          },
          ".border-gradient-primary": {
            border: " 0 0 4px 0 solid transparent",
            borderImage:
              "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%) 1",
          },
        },
        ["responsive"] // Add responsive support
      );
    },
  ],
};
export default config;
