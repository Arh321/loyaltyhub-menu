"use client";

import Image from "next/image";
import { useState } from "react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import SmallQr from "@/components/special-shapes/icons";
import DotGrid from "@/components/special-shapes/dotted-grid";
import linesImage from "@/public/images/Frame 7.png";
import BarcodeScannerModalContainer from "@/components/scanner-components/scanner-component-container";
export default function BarcodeScanner() {
  const [openScannerModal, setOpenScannerModal] = useState(false);

  const showModal = () => {
    setOpenScannerModal(true);
  };

  const handleCancel = () => {
    setOpenScannerModal(false);
  };

  return (
    <div className="justify-center flex items-center  w-full bg-white mx-auto relative light:bg-background dark:bg-background">
      <div
        style={{
          backgroundColor: "#151518",
        }}
        className="h-[100dvh] flex flex-col relative items-center pt-24 text-white w-[470px] mx-auto"
      >
        <div className="w-full h-full absolute top-0 left-0">
          <Image
            src={linesImage}
            width={400}
            height={900}
            className=" object-cover"
            alt="lines"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        {/* متن راهنما و QR Code در بالا */}
        <div className="text-center w-full flex flex-col gap-[4vh]">
          <p className="text-lg font-almarai" dir="rtl">
            جهت مشاهده منو <br /> لطفا QR Code روی میز را اسکن کنید.
          </p>
          <div className=" p-2 rounded-lg  flex items-center justify-center w-full">
            <span
              className="w-full"
              style={{
                border: "1px solid ",
                borderImage: "linear-gradient(to left,white,black) 1",
              }}
            />
            <Image
              src="/images/qr-test.png"
              alt="QR Code"
              width={120}
              height={120}
              className="border border-white p-2"
              style={{
                borderColor: "black white black white ",
                borderImageSource:
                  "linear-gradient(to right, white, black, white)", // گرادینت برای بالا و پایین
                borderImageSlice: "1 1 1 1", // فقط بالا و پایین گرادینت می‌گیرد
              }}
            />
            <span
              className="w-full"
              style={{
                border: "1px solid ",
                borderImage: "linear-gradient(to right, white, black) 1",
              }}
            />
          </div>
        </div>
        {/* دکمه اسکن */}
        <div className="w-full absolute bottom-8 right-0">
          <div className="w-full h-[35vh] relative flex justify-center items-center">
            <div className="w-full h-full inset-0 absolute">
              <DotGrid />
            </div>
            <ShinyButton
              dir="rtl"
              onClick={showModal}
              // style={{ border: "Mixed solid #FFFFFF" }}
              textColor="white"
              className="flex items-center justify-center z-10 relative backdrop-blur-sm !bg-transparent border-white border"
              childClassName="flex items-center gap-2 py-2 px-3 font-almarai"
            >
              اسکن QR Code
              <SmallQr />
            </ShinyButton>
          </div>
        </div>
      </div>
      <BarcodeScannerModalContainer
        handleCancel={handleCancel}
        openState={openScannerModal}
      />
    </div>
  );
}
