import BarcodeScannerButton from "@/components/providers-components/barcode-scanner-button";
import MyShops from "@/components/providers-components/my-shops";
import SearchForProvidersButton from "@/components/providers-components/search-for-providers-button";
import React from "react";

const ProvidersPage = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <span className="text-white text-xs">
        ازین قسمت میتونی مجموعه ای که دنبالشی رو پیدا کنی
      </span>
      <SearchForProvidersButton />
      <BarcodeScannerButton />
      <MyShops />
    </div>
  );
};

export default ProvidersPage;
