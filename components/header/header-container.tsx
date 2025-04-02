"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import CTAButton from "../shared-components/cta-button/cta-button";
import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import SidebarComponent from "./sidebar-component";
import { useState } from "react";
import { ICompany } from "@/types/company-type";
const HeaderContainer = () => {
  const { company, companyLogo } = useSelector(
    (state: RootState) => state.company
  );
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full grid grid-cols-3 gap-4 items-center pt-2 px-4">
      <div className="col-span-1">
        <CTAButton
          onClick={() => setOpen(true)}
          className="!bg-transparent !border-none !text-light-text !text-2xl !p-0 !w-max"
        >
          <Icon icon="ion:menu" width="28" height="28" />
        </CTAButton>
      </div>
      <div className="col-span-1 flex flex-col items-center gap-1">
        <div className="relative size-[55px] rounded-full overflow-hidden">
          <Image
            src={companyLogo || ""}
            alt="company logo"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="col-span-1 flex justify-end">
        <CTAButton
          onClick={() => router.back()}
          className="!bg-transparent !border-none !text-light-text !text-2xl !p-0 !w-max"
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
