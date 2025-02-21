import Html5QrcodePlugin from "@/components/welcome-page/scanner/barcode-scanner";

export default function BarcodeScanner() {
  return (
    <div className="justify-center flex items-center h-[90vh]">
      <Html5QrcodePlugin />
    </div>
  );
}
