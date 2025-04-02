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
          wrapper: "backdrop-blur-sm",
          body: "!p-2",
        }}
        closable={false}
      >
        <CTAButton
          className="w-full h-max p-2 flex items-center justify-center gap-2 custom-CTAButton transition"
          onClick={() => {
            router.push("/login");
          }}
        >
          <span>ورود/عضویت</span>
        </CTAButton>
        <ul className="mt-6 space-y-4 whitespace-nowrap">
          <SidebarItems
            text="اطلاعات مجموعه"
            icon={<ShopOutlined className="text-light-text text-xl" />}
            onClick={() => {
              router.push("/company-info");
            }}
          />

          <SidebarItems
            text="ساعت کاری مجموعه"
            icon={<FieldTimeOutlined className="text-light-text text-xl" />}
            onClick={() =>
              setOpenModals({ ...openModals, WorkTimesDrawer: true })
            }
          />

          <SidebarItems
            text="قوانین مجموعه"
            icon={<InfoOutlined className="text-light-text text-xl" />}
            onClick={() => {
              setOpenModals({ ...openModals, RulesModal: true });
            }}
          />
        </ul>
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
