"use client";
import Html5QrcodePlugin from "@/components/welcome-page/scanner/barcode-scanner";
import Image from "next/image";
import { useState } from "react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import SmallQr from "@/components/special-shapes/icons";
import DotGrid from "@/components/special-shapes/dotted-grid";

export default function BarcodeScanner() {
  const [scan, setScan] = useState<boolean>(false);

  return (
    <div className="justify-center flex items-center  w-full min-w-[470px] max-w-[470px] mx-auto h-screen relative light:bg-background dark:bg-background">
      {scan ? (
        <Html5QrcodePlugin />
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-between bg-black text-white pt-[18vh] pb-[4.5vh] min-w-[470px]">
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

          <div className="w-full h-[30vh] relative flex justify-center items-center">
            <div className="w-full h-full inset-0 absolute">
              <DotGrid />
            </div>
            <ShinyButton
              dir="rtl"
              onClick={() => {
                setScan(true);
              }}
              // style={{ border: "Mixed solid #FFFFFF" }}
              textColor="white"
              className="flex items-center justify-center z-10 relative backdrop-blur-sm  border-white border"
              childClassName="flex items-center gap-2 py-2 px-3 font-almarai"
            >
              اسکن QR Code
              <SmallQr />
            </ShinyButton>
          </div>
        </div>
      )}
    </div>
  );
}
