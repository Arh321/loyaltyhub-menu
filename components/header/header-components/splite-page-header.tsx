import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { LeftOutlined } from "@ant-design/icons";

const SplitPageHeader = ({
  router,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  router: any;
}) => {
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-4 items-center pt-2 px-4">
        <div className="col-span-1"></div>
        <div className="col-span-1 flex flex-col items-center gap-1 font-Yekan-Medium text-light-secondary-text">
          تقسیم دنگی
        </div>
        <div className="col-span-1 flex justify-end">
          <CTAButton
            onClick={() => router.back()}
            className="!bg-transparent !border-none !text-xl !p-0 !w-max !text-light-secondary-text"
          >
            <LeftOutlined />
          </CTAButton>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="w-full h-1 border-gradient-secondary border-b-2 border-light-gray"></div>
      </div>
    </>
  );
};

export default SplitPageHeader;
