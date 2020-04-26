import React from "react";
import NavbarFooter from "components/common/navbar-footer";
import SectionWrapper from "components/common/section-wrapper";
import Albums from "components/albums";

const AlbumScreen = () => {
  return (
    <>
      <SectionWrapper>
        <Albums />
        <NavbarFooter />
      </SectionWrapper>
    </>
  );
};

export default AlbumScreen;
