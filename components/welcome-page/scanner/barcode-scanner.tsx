"use client";
import { useState } from "react";

import { Ripple } from "primereact/ripple";

import "./barcode-scanner.css";
import { useRouter } from "next/navigation";
import { Scanner } from "@yudiel/react-qr-scanner";

interface Html5QrcodePluginProps {
  handler?: (deskId: string) => void;
  classProp?: string;
}

const Html5QrcodePlugin: React.FC<Html5QrcodePluginProps> = ({
  handler,
  classProp,
}) => {
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [result, setResult] = useState<any>();
  const router = useRouter();
  return (
    <div
      className={
        classProp
          ? (classProp as string)
          : "grow w-full flex flex-col h-full  items-center justify-start relative"
      }
    >
      {isScanning ? (
        <Scanner
          classNames={{ container: "animate-show-drop-down my-4" }}
          onScan={(result) =>
            handler
              ? handler(result[0].rawValue)
              : router.push(`/${result[0].rawValue}`)
          }
        />
      ) : (
        <iframe
          className="w-full h-full"
          src="https://lottie.host/embed/d6e71ac5-af08-463b-9c4f-c35c1f35a637/imvti84avW.json"
        ></iframe>
      )}
      {result && result}
      <button
        onClick={() => setIsScanning(!isScanning)}
        className={`w-[240px] p-2 ${
          isScanning ? "bg-main-dark-red" : "bg-green"
        } rounded  gap-2 text-main-light-silver font-medium shadow-lg text-3xl sm:text-3xl absolute bottom-0 left-0 right-0 mx-auto`}
      >
        {isScanning ? (
          <span className="w-full flex items-center justify-center gap-2 animate-show-drop-down ">
            <span>توقف</span>
            <i className="pi pi-stop bg-main-light-silver text-3xl"></i>
          </span>
        ) : (
          <>
            <span className="w-full flex items-center justify-center gap-2 animate-show-drop-down">
              <span>اسکن بارکد</span>
              <i className="pi pi-qrcode text-3xl"></i>
            </span>
            <Ripple />
          </>
        )}
      </button>
    </div>
  );
};

export default Html5QrcodePlugin;
