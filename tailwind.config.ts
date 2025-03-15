import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
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
        lxs:"375px",
        xs: "460px", // breakpoint برای صفحه‌های کوچک‌تر از 400px
        
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top, black, transparent)",
        "welcome-slide-linear":
          "linear-gradient(to right, rgb(0,0,0,0.1), rgb(0,0,0))",
      },
      fontFamily: {
        almarai: ['Almarai"', ...defaultTheme.fontFamily.sans],
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
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeUp: "fadeUp 0.5s ease-in-out forwards",
        "fadeIn-repetive": "fadeIn 2s ease-in-out",
        movable: "movable 3s infinite",
        popIn: "popIn 0.7s ease-in-out",
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
