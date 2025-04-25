import dynamic from "next/dynamic";
import { DepartmentItemSkeleton } from "../departments-page/department-item-skeleton";

const BasketProductsListContainerLazy = dynamic(
  () => import("./basket-products-list-container"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex flex-col gap-3 overflow-y-auto pb-10 h-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <DepartmentItemSkeleton
            key={index}
            parentClass="!w-full !h-[60px] !rounded-lg"
          />
        ))}
      </div>
    ),
  }
);
const BasketSplitRouteButtonLazy = dynamic(
  () => import("./basket-split-route-button"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex items-center justify-center h-full">
        <DepartmentItemSkeleton parentClass="!w-full !h-[60px] !rounded-lg" />
      </div>
    ),
  }
);

const BasketPaymentPreviewLazy = dynamic(
  () => import("./basket-payment-preview"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex items-center justify-center h-full">
        <DepartmentItemSkeleton parentClass="!w-full !h-[60px] !rounded-lg" />
      </div>
    ),
  }
);
const TotalPaymentCardLazy = dynamic(() => import("./total-payment-card"), {
  ssr: false,
  loading: () => (
    <div className="w-full flex items-center justify-center h-full">
      <DepartmentItemSkeleton parentClass="!w-full !h-[60px] !rounded-lg" />
    </div>
  ),
});

export {
  BasketProductsListContainerLazy,
  BasketSplitRouteButtonLazy,
  BasketPaymentPreviewLazy,
  TotalPaymentCardLazy,
};
