import { Icon } from "@iconify/react/dist/iconify.js";

import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { LeftOutlined } from "@ant-design/icons";

const CompanyHeader = ({
  setOpen,
  router,
}: {
  setOpen: (value: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  router: any;
}) => {
  return (
    <div className="w-full grid grid-cols-3 gap-4 items-center pt-2 px-4">
      <div className="col-span-1">
        <CTAButton
          onClick={() => setOpen(true)}
          className="!bg-transparent !border-none !text-2xl !p-0 !w-max !text-white"
        >
          <Icon icon="ion:menu" width="28" height="28" />
        </CTAButton>
      </div>
      <div className="col-span-1 flex flex-col items-center gap-1"></div>
      <div className="col-span-1 flex justify-end">
        <CTAButton
          onClick={() => router.back()}
          className="!bg-transparent !border-none !text-xl !p-0 !w-max !text-white"
        >
          <LeftOutlined />
        </CTAButton>
      </div>
    </div>
  );
};

export default CompanyHeader;
