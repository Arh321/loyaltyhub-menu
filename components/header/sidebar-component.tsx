import { Drawer } from "antd";
import { ICompany } from "@/types/company-type";
import { useRouter } from "next/navigation";
import ImageWithLoader from "../image-with-loader/image-with-loader";
import CTAButton from "../shared-components/cta-button/cta-button";
import {
  CloseOutlined,
  FieldTimeOutlined,
  InfoOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import SidebarItems from "./sidebar-item";
import WorkTimesDrawer from "./sidebar-components/work-times-bottom";
import { useState } from "react";
import ContactUsBottom from "./sidebar-components/contact-us-bottom";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
interface SidebarComponentProps {
  open: boolean;
  onClose: () => void;
  company: ICompany;
  companyLogo: string;
}

const SidebarComponent = ({
  open,
  onClose,
  company,
  companyLogo,
}: SidebarComponentProps) => {
  const [openModals, setOpenModals] = useState({
    WorkTimesDrawer: false,
    RulesModal: false,
  });

  const sidebarItems = [
    {
      text: "اطلاعات مجموعه",
      icon: <ShopOutlined className="text-light-text text-xl" />,
      onClick: () => router.push(`/companyInfo`),
    },
    {
      text: "ساعت کاری مجموعه",
      icon: <FieldTimeOutlined className="text-light-text text-xl" />,
      onClick: () => setOpenModals({ ...openModals, WorkTimesDrawer: true }),
    },
    {
      text: "قوانین مجموعه",
      icon: <InfoOutlined className="text-light-text text-xl" />,
      onClick: () => setOpenModals({ ...openModals, RulesModal: true }),
    },
  ];

  const router = useRouter();
  return (
    <>
      <Drawer
        title={
          <div className="w-full flex flex-col gap-2 relative">
            <div className="flex flex-col items-center gap-2 ">
              <div className="relative size-[50px] rounded-full overflow-hidden">
                <ImageWithLoader
                  src={companyLogo}
                  alt="company logo"
                  width={50}
                  height={50}
                  imageClass="object-cover"
                />
              </div>
              <span className="text-light-text text-xs font-Yekan-Medium">
                {company?.name}
              </span>
            </div>
            <div className="w-full h-1 border-gradient-secondary border-b-2 border-light-gray"></div>
            <CTAButton
              onClick={onClose}
              className="!bg-transparent !border-none !text-light-text  !text-base !p-0 !w-max !h-max absolute top-0 left-0"
            >
              <CloseOutlined />
            </CTAButton>
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        className="!w-[70vw] xs:!w-[50vw] "
        classNames={{
          header: "!border-none !p-2",
          content: "!bg-light-background rounded-l-xl",
          wrapper: "backdrop-blur-sm !w-full",
          body: "!p-2",
        }}
        closable={false}
      >
        <div className="flex flex-col gap-2 w-full h-full">
          <CTAButton
            className="w-full h-max p-2 flex items-center justify-center gap-2 custom-CTAButton transition"
            onClick={() => {
              router.push("/login");
            }}
          >
            <span>ورود/عضویت</span>
          </CTAButton>
          <ul className="mt-6 space-y-4 whitespace-nowrap grow">
            {sidebarItems.map((item, index) => (
              <SidebarItems
                key={index}
                text={item.text}
                icon={item.icon}
                onClick={item.onClick}
              />
            ))}
          </ul>
          {/* لوگو (موقت) */}
          <div className="flex flex-col items-center mt-6">
            <Image
              src="/images/logo.webp"
              loading="lazy"
              alt="logo pic"
              width={100}
              height={100}
            />
            <p className="mt-2 text-sm font-Yekan-Medium">
              Digital Menu Market
            </p>
            <p className="text-xs text-gray-700 font-Yekan-Light">
              Quality at the Top
            </p>
          </div>
          {/* دکمه‌های پایانی */}
          <button className="w-full mt-4 py-2 font-Yekan-Medium bg-light-primary text-white rounded-lg hover:darken transition">
            درباره دیجیتال منو مارکت{" "}
          </button>
          <button className="w-full mt-2 flex items-center font-Yekan-Medium justify-center gap-2 py-2 border border-light-primary text-light-primary rounded-lg hover:bg-light-primary hover:text-white transition">
            <Icon
              icon="hugeicons:instagram"
              width="24"
              height="24"
              style={{ color: "rgba(33, 75, 138, 1)" }}
            />{" "}
            <span>Follow Us on Instagram</span>
          </button>
        </div>
      </Drawer>
      <WorkTimesDrawer
        open={openModals.WorkTimesDrawer}
        onClose={() => setOpenModals({ ...openModals, WorkTimesDrawer: false })}
      />
      <ContactUsBottom
        open={openModals.RulesModal}
        onClose={() => setOpenModals({ ...openModals, RulesModal: false })}
      />
    </>
  );
};

export default SidebarComponent;
