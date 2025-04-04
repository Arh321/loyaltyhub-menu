"use client";
import { usePathname } from "next/navigation";
import React, { useTransition } from "react";
import SplashScreen from "../loading/splash-screen";

export function LoadingIndicator({
  component,
}: {
  component: React.ReactNode;
}) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname(); // Reactively tracks the current route.
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    startTransition(() => {
      setShouldRender(true);
    });
  }, [pathname]);

  return (
    <div className="h-full w-full flex flex-col bg-cta overflow-hidden">
      {isPending || (!shouldRender && <SplashScreen />)}
      {component}
    </div>
  );
}
