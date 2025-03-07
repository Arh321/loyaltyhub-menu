import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider/theme-provider"; // Update the path if necessary
import "./globals.css";
import ReduxProvider from "@/components/redux/redux-provider";
import CartNotification from "@/components/cart-notification";
import { ConfigProvider } from "antd";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query/queryClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const theme = {
  components: {
    Button: {
      defaultHoverBg: "gray",
      defaultHoverColor: "black",
      defaultColor: "black",
      defaultBg: "transparent",
      defaultBorderColor: "black",

      paddingBlock: 5,
      paddingInline: 8,
    },
  },
  //    token: {
  //   colorDefaultHover: "#ffff", // رنگ بک‌گراند هاور برای دکمه‌های `default`
  //   colorPrimaryHover: "#40a9ff", // رنگ هاور برای دکمه‌های `primary`

  // },}
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        dir="rtl"
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light-background dark:bg-dark-background transition-colors duration-300 font-Yekan-Regular text-black max-w-[570px] mx-auto`}
      >
        {/* <ThemeProvider> */}
        {/* <QueryClientProvider client={queryClient}> */}
        <ConfigProvider theme={theme}>
          <ReduxProvider>
            {children}

            <CartNotification />
          </ReduxProvider>
        </ConfigProvider>
        {/* </QueryClientProvider> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
