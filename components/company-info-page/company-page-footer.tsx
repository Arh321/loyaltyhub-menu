import { useRouter } from "next/navigation";
import Html5QrcodePlugin from "../scanner/barcode-scanner";
import CTAButton from "../shared-components/cta-button/cta-button";
import { memo, useEffect } from "react";

const CompanyPageFooter = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/departments");
  }, []);
  return (
    <div className="w-full grid grid-cols-4 gap-2 p-4 animate-fadeUp">
      <CTAButton
        onClick={() => {
          router.push("/departments");
        }}
        className="w-full col-span-2 px-[28px] py-[14px]"
      >
        مشاهده منو
      </CTAButton>
      <div className="col-span-2">
        <Html5QrcodePlugin />
      </div>
    </div>
  );
};

export default memo(CompanyPageFooter);
