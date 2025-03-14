import React from "react";
import CustomButton from "../menu-page/buttons/custom-button";

const BarcodeScannerButton = () => {
  return (
    <CustomButton
      bgColor="#f44c3f"
      bgHoverColor="#f44b3fa9"
      textColor="white"
      buttonDestination="/barcode-scanner"
      width="80%"
    >
      اسکن بارکد
    </CustomButton>
  );
};

export default BarcodeScannerButton;
