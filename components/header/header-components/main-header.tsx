import ImageWithLoader from "@/components/image-with-loader/image-with-loader";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LeftOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";

const MainHeader = ({
  setOpen,
  companyLogo,
  router,
}: {
  setOpen: (value: boolean) => void;
  companyLogo: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  router: any;
}) => {
  const { depId } = useParams();
  const path = usePathname();
  const isInbasket = useMemo(() => {
    return path.includes("basket");
  }, [path]);

  return (
    <>
      <div className="w-full grid grid-cols-3 gap-4 items-center pt-2 px-4">
        <div className="col-span-1">
          {isInbasket ? (
            <CTAButton
              onClick={() => router.push(`/departments/${depId}/basket/split`)}
              className="!bg-light-primary-disabled border border-light-primary !p-2"
            >
              <span className="text-xs whitespace-nowrap">تقسیم دنگی</span>
            </CTAButton>
          ) : (
            <CTAButton
              onClick={() => setOpen(true)}
              className="!bg-transparent !border-none !text-2xl !p-2 !w-max !text-light-secondary-text hover:!bg-light-secondary "
            >
              <Icon icon="ion:menu" width="28" height="28" />
            </CTAButton>
          )}
        </div>
        <div className="col-span-1 flex flex-col items-center gap-1">
          <div className="relative size-[55px] rounded-full overflow-hidden">
            <ImageWithLoader
              src={companyLogo || ""}
              alt="company logo"
              width={55}
              height={55}
              imageClass="object-cover"
            />
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <CTAButton
            onClick={() => router.back()}
            className="!bg-transparent !border-none !text-xl !p-2 !w-max !text-light-secondary-text hover:!bg-light-secondary "
          >
            <LeftOutlined />
          </CTAButton>
        </div>
      </div>
      {!isInbasket && (
        <div className="w-full px-4">
          <div className="w-full h-1 border-gradient-secondary border-b-2 border-light-gray"></div>
        </div>
      )}
    </>
  );
};

export default MainHeader;
