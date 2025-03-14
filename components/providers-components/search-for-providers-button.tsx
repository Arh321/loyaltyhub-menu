import React from "react";
import CustomButton from "../menu-page/buttons/custom-button";

const SearchForProvidersButton = () => {
  return (
    <CustomButton
      bgColor="#f44c3f"
      bgHoverColor="#f44b3fa9"
      textColor="white"
      buttonDestination="/providers/search"
      width="80%"
      className=" mx-8"
    >
      جستجوی مجموعه
    </CustomButton>
  );
};

export default SearchForProvidersButton;
