import BreadcrumbArea from "@/src/common/breadcrumb-area";
import MapArea from "@/src/common/map-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContactArea from "./contact-area";

const Contact = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Contact" title="Get In Touch" />
      <ContactArea />
      <MapArea />
      <Footer />
    </>
  );
};

export default Contact;
