import { memo, useEffect } from "react";
import CTAButton from "../shared-components/cta-button/cta-button";

interface BasketSplitRouteButtonProps {
  depId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  router: any;
}

const BasketSplitRouteButton: React.FC<BasketSplitRouteButtonProps> = ({
  depId,
  router,
}) => {
  useEffect(() => {
    router.prefetch(`/departments/${depId}/basket/split`);
    return () => {
      router.prefetch(`/departments/${depId}/basket/split`);
    };
  }, [depId, router]); // به depId بستگی داره ولی مشکلی ایجاد نمی‌کنه

  return (
    <div className="w-full flex flex-col gap-2 px-4">
      <div className="w-full px-4">
        <div className="w-full h-1 border-gradient-primary border-b-2 border-light-primary"></div>
      </div>
      <CTAButton
        onClick={() => router.push(`/departments/${depId}/basket/split`)}
        className="!bg-light-primary-disabled border border-light-primary !p-2 h-max"
      >
        <span className="text-xs whitespace-nowrap">تقسیم دنگی</span>
      </CTAButton>
    </div>
  );
};

export default memo(BasketSplitRouteButton);
