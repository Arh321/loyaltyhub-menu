"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter, usePathname, useParams } from "next/navigation";
import SidebarComponent from "./sidebar-component";
import { useState } from "react";
import { ICompany } from "@/types/company-type";
import ProductHeader from "./header-components/product-page-header";
import CompanyHeader from "./header-components/company-info-header";
import MainHeader from "./header-components/main-header";
import SplitPageHeader from "./header-components/splite-page-header";

const HeaderContainer = () => {
  const { productId } = useParams();
  const { company, companyLogo } = useSelector(
    (state: RootState) => state.company
  );
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isCompanyInfoPage = pathname === "/companyInfo";
  const isProductPage = !!productId;
  const isInSplt = pathname.includes("split");

  return (
    <div className="w-full flex flex-col gap-4">
      {isProductPage ? (
        <ProductHeader router={router} />
      ) : isCompanyInfoPage ? (
        <CompanyHeader setOpen={setOpen} router={router} />
      ) : isInSplt ? (
        <SplitPageHeader router={router} />
      ) : (
        <MainHeader
          setOpen={setOpen}
          companyLogo={companyLogo as string}
          router={router}
        />
      )}
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
