import { Modal } from "antd";

interface IWelcomeModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onOk: () => void;
  onCancel: () => void;
}

const WelcomeModal = ({
  isOpen,
  title,
  description,
  onOk,
  onCancel,
}: IWelcomeModalProps) => {
  return (
    <>
      <Modal
        title={title}
        open={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        classNames={{
          wrapper: "backdrop-blur-md bg-transparent",
          header: "!bg-transparent",
          body: "!bg-transparent",
          content: "!bg-light-secondary",
          footer: "!hidden",
        }}
        footer={false}
      >
        <p className="text-light-white text-center">{description}</p>
      </Modal>
    </>
  );
};

export default WelcomeModal;
