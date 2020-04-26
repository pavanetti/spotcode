import React from "react";
import Discovery from "components/discovery";
import NavbarFooter from "components/common/navbar-footer";
import SectionWrapper from "components/common/section-wrapper";

const DiscoveryScreen = () => {
  return (
    <>
      <SectionWrapper>
        <Discovery />
      </SectionWrapper>
      <NavbarFooter />
    </>
  );
};

export default DiscoveryScreen;
