import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConfigProvider from "@/components/providers/config-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { LoadingIndicator } from "@/components/loadingIndicator/loading-indicator";
import { Suspense } from "react";
import SplashScreen from "@/components/loading/splash-screen";
import ErrorBoundaryWrapper from "@/components/error-component/ErrorBoundary";
import NotFoundComponent from "@/components/not-found-page/not-found-component";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent transition-colors duration-300 font-Yekan-Regular text-black max-w-[768px] mx-auto h-[100dvh]`}
      >
        <QueryProvider>
          <Suspense fallback={<SplashScreen />}>
            <ConfigProvider>
              <ErrorBoundaryWrapper
                fallback={
                  <NotFoundComponent title="مشکلی در بارگذاری صفحه رخ داده است" />
                }
              >
                <LoadingIndicator component={children} />
              </ErrorBoundaryWrapper>
            </ConfigProvider>
          </Suspense>
        </QueryProvider>
      </body>
    </html>
  );
}
