import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConfigProvider from "@/components/providers/config-provider";
import { LoadingIndicator } from "@/components/loadingIndicator/loading-indicator";
import { Suspense } from "react";
import SplashScreen from "@/components/loading/splash-screen";
import ErrorBoundaryWrapper from "@/components/error-component/ErrorBoundary";
import NotFoundComponent from "@/components/not-found-page/not-found-component";
import ReduxProvider from "@/redux/provider/redux-provider";
import { NotifyProvider } from "@/components/shared-components/notife/notife";
import Head from "next/head";
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
  title: "Loyalty team menu digital",
  description: "منو دیجیتال توسعه داده شده توسط تیم loyalty hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* ✅ این لینک‌ها برای preconnect */}
        <link rel="preconnect" href="https://api.iconify.design" />
        <link rel="preconnect" href="https://dashboardapi.loyaltyhub.ir" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent transition-colors duration-300 font-Yekan-Regular text-black max-w-[768px] mx-auto h-[100dvh]`}
      >
        <ReduxProvider>
          <NotifyProvider>
            <Suspense fallback={<SplashScreen />}>
              <ConfigProvider>
                <ErrorBoundaryWrapper
                  fallback={
                    <NotFoundComponent title="مشکلی در بارگذاری صفحه رخ داده است" />
                  }
                >
                  <LoadingIndicator component={<>{children}</>} />
                </ErrorBoundaryWrapper>
              </ConfigProvider>
            </Suspense>
          </NotifyProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
