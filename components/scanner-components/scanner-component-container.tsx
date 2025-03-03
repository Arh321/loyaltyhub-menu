import React from "react";
import { Modal } from "antd";
import Html5QrcodePlugin from "../welcome-page/scanner/barcode-scanner";

interface BarcodeScannerModalContainerProps {
  handleCancel: () => void;
  openState: boolean;
}

const BarcodeScannerModalContainer: React.FC<
  BarcodeScannerModalContainerProps
> = ({ handleCancel, openState }) => {
  const scannerResultHandler = (value: string) => {
    console.log(value);
    if (value) {
      handleCancel();
    }
  };

  return (
    <>
      <Modal
        title="بارکد مجموعه را اسکن کنید"
        open={openState}
        onCancel={handleCancel}
        classNames={{
          body: "flex justify-center",
          header: "!flex",
        }}
        footer={false}
        destroyOnClose
      >
        <div className="size-[360px] animate-fadeIn flex justify-center duration-500 delay-500">
          <Html5QrcodePlugin handler={scannerResultHandler} />
        </div>
      </Modal>
    </>
  );
};

export default BarcodeScannerModalContainer;
