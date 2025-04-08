import { Modal } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ImageWithLoader from "../image-with-loader/image-with-loader";
import CTAButton from "../shared-components/cta-button/cta-button";
import { CloseOutlined } from "@ant-design/icons";
interface IWelcomeModalProps {
  isOpen: boolean;
  title: string;
  onOk: () => void;
  onCancel: () => void;
}

const WelcomeModal = ({
  isOpen,
  title,
  onOk,
  onCancel,
}: IWelcomeModalProps) => {
  const { companyLogo, company } = useSelector(
    (state: RootState) => state.company
  );
  return (
    <>
      <Modal
        title={false}
        open={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        classNames={{
          wrapper:
            "backdrop-blur-md !flex !items-center !justify-center  bg-transparent [&_.ant-modal]:!top-0 [&_.ant-modal]:!left-0 [&_.ant-modal]:!p-0",
          header: "!bg-transparent !h-[55px] !relative",
          body: "!bg-transparent",

          content: "!bg-transparent !p-0",
          footer: "!hidden",
        }}
        transitionName="fade"
        footer={false}
        closeIcon={false}
        destroyOnClose={true}
      >
        <div className="flex flex-col gap-4 !bg-[rgba(0,0,0,0.7)] backdrop-blur-[30px] !border !border-[rgba(255,255,255,0.3)] w-full rounded-[10px] p-4">
          <div className="w-full flex items-center justify-center !bg-transparent !h-[55px] !relative">
            <div
              style={{
                boxShadow: "0 0 15px 0 var(--primary)",
              }}
              className=" size-[55px] rounded-full overflow-hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            >
              <ImageWithLoader
                src={companyLogo || ""}
                alt="company logo"
                width={55}
                height={55}
                imageClass="object-cover"
              />
            </div>
            <CTAButton
              className="absolute top-0 left-0 !w-max !h-max !p-2 !rounded-[6px] !bg-transparent !border-none !shadow-none hover:transition-all hover:!bg-light-secondary "
              onClick={onOk}
            >
              <CloseOutlined />
            </CTAButton>
          </div>

          <div>
            <p className="text-light-white text-center text-lg font-Yekan-Regular">
              {company?.name}
            </p>
          </div>
          <p className="text-light-white text-center whitespace-break-spaces leading-8 font-Almarai-Regular">
            {title}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default WelcomeModal;
