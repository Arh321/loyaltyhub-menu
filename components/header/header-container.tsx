"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CTAButton from "../shared-components/cta-button/cta-button";
import { LeftOutlined } from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import SidebarComponent from "./sidebar-component";
import { useState } from "react";
import { ICompany } from "@/types/company-type";
import ImageWithLoader from "../image-with-loader/image-with-loader";

const HeaderContainer = () => {
  const { company, companyLogo } = useSelector(
    (state: RootState) => state.company
  );
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isCompanyPage = pathname === "/companyInfo";

  return (
    <div className="w-full grid grid-cols-3 gap-4 items-center pt-2 px-4">
      <div className="col-span-1">
        <CTAButton
          onClick={() => setOpen(true)}
          className={`!bg-transparent !border-none !text-2xl !p-0 !w-max ${
            isCompanyPage ? "!text-white" : "!text-light-text"
          }`}
        >
          <Icon icon="ion:menu" width="28" height="28" />
        </CTAButton>
      </div>
      <div className="col-span-1 flex flex-col items-center gap-1">
        {!isCompanyPage && (
          <div className="relative size-[55px] rounded-full overflow-hidden">
            <ImageWithLoader
              src={companyLogo || ""}
              alt="company logo"
              width={55}
              height={55}
              imageClass="object-cover"
            />
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end">
        <CTAButton
          onClick={() => router.back()}
          className={`!bg-transparent !border-none !text-xl !p-0 !w-max ${
            isCompanyPage ? "!text-white" : "!text-light-text"
          }`}
        >
          <LeftOutlined />
        </CTAButton>
      </div>
      <SidebarComponent
        open={open}
        onClose={() => setOpen(false)}
        company={company as ICompany}
        companyLogo={companyLogo as string}
      />
    </div>
  );
};

export default HeaderContainer;
