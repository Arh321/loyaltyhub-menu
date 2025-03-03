"use client";
import "./barcode-scanner.css";
import { Scanner } from "@yudiel/react-qr-scanner";

interface Html5QrcodePluginProps {
  handler: (deskId: string) => void;
  classProp?: string;
}

const Html5QrcodePlugin: React.FC<Html5QrcodePluginProps> = ({
  handler,
  classProp,
}) => {
  return (
    <div
      className={
        classProp
          ? (classProp as string)
          : "grow  w-full flex flex-col h-full  items-center justify-start relative"
      }
    >
      <Scanner
        classNames={{ container: "animate-show-drop-down w-full h-full" }}
        onScan={(result) => handler(result[0].rawValue)}
      />
    </div>
  );
};

export default Html5QrcodePlugin;
