import React from "react";
import { Modal } from "antd";
import { Scan, History } from "lucide-react";
import Html5QrcodePlugin from "../welcome-page/scanner/barcode-scanner";
import { useRouter } from "next/navigation";

interface BarcodeScannerModalContainerProps {
  handleCancel: () => void;
  openState: boolean;
}

const BarcodeScannerModalContainer: React.FC<
  BarcodeScannerModalContainerProps
> = ({ handleCancel, openState }) => {
  // const [zoom, setZoom] = useState(1);
  const router = useRouter();
  const scannerResultHandler = (value: string) => {
    router.push(window.location.origin + "/" + value);
    if (value) {
      handleCancel();
    }
  };

  return (
    <Modal
      title={false}
      open={openState}
      onCancel={handleCancel}
      className="!bg-transparent !backdrop-blur-md"
      footer={null}
      destroyOnClose
      centered
    >
      <div className="relative flex flex-col items-center">
        {/* کادر اسکن */}
        <div className="relative size-[300px] bg-black rounded-xl overflow-hidden shadow-lg">
          {/* افکت اسکن */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[90%] h-1 bg-yellow-400 animate-scan"></div>
          </div>
          {/* اسکنر */}
          <Html5QrcodePlugin
            handler={scannerResultHandler}
            // zoom={zoom}
          />
        </div>

        {/* کنترل زوم */}
        {/* <div className="mt-4 w-3/4">
          <Slider
            min={1}
            max={5}
            step={0.1}
            value={zoom}
            onChange={(value) => setZoom(value)}
            tooltip={{ formatter: (value) => `Zoom: ${value}x` }}
          />
        </div> */}

        {/* آیکون‌های پایین صفحه */}
        <div className="flex justify-around w-full mt-4">
          <button className="flex flex-col items-center text-gray-700">
            <Scan className="w-6 h-6" />
            <span className="text-sm">Generate</span>
          </button>
          <button className="flex flex-col items-center text-gray-700">
            <History className="w-6 h-6" />
            <span className="text-sm">History</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BarcodeScannerModalContainer;
