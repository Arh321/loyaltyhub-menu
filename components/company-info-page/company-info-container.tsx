"use client";
import ImageWithLoader from "../image-with-loader/image-with-loader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const CompanyInfoContainer = () => {
  const { company, companyLogo } = useSelector(
    (state: RootState) => state.company
  );
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-[300px] absolute top-0 left-0">
        <ImageWithLoader
          src={companyLogo || ""}
          alt="company logo"
          width={300}
          height={300}
          imageClass="object-cover"
        />
      </div>
      <div
        style={{
          boxShadow: "0 -11px 6px -9px var(--text)",
        }}
        className="w-full h-[calc(100%-250px)] flex flex-col gap-4 bg-light-background rounded-t-[40px] p-4 mt-[250px] z-10 relative"
      >
        <div className="flex flex-col items-center gap-2 ">
          <div className="relative size-[100px] rounded-full overflow-hidden">
            <ImageWithLoader
              src={companyLogo || ""}
              alt="company logo"
              width={100}
              height={100}
              imageClass="object-cover"
            />
          </div>
          <span className="text-light-text text-xl font-Yekan-Medium">
            {company?.name}
          </span>
        </div>
        <div className="w-full h-1 border-gradient-secondary border-b-2 border-light-primary"></div>
        <div className="w-full flex flex-col gap-2">
          <span className="text-light-text text-sm font-Yekan-Medium">
            {company?.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoContainer;
