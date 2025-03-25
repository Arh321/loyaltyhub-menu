import React from "react";
import RulesModal from "./modals/rules-modal/rules-modal";
import InfoModal from "./modals/info-modal/info-modal-container/info-modal";
import WorkTimesDrawer from "./drawers/work-times-bottom";
import OTPDrawer from "./otp-login/otp-drawer";
import ContactUsBottom from "./drawers/contact-us-bottom";

const ModalAndDrawerContainer = () => {
  return (
    <>
      <RulesModal modalId="RulesModal" />
      <WorkTimesDrawer />
      <InfoModal modalId="InfoModal" />
      <OTPDrawer />
      <ContactUsBottom />
    </>
  );
};

export default ModalAndDrawerContainer;
