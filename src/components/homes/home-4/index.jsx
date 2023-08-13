import FooterThree from "@/src/layout/footers/footer-3";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import AboutBrand from "./about-brand";
import AppFaqArea from "./app-faq-area";
import AppNewsletter from "./app-newsletter";
import AppTestimonial from "./app-testimonial";
import Blog from "./blog";
import Brand from "./brand";
import FeatureArea from "./feature-area";
import HeroBanner from "./hero-banner";
import PriceArea from "./price-area";

const HomeFour = () => {
  return (
    <>
      <HeaderFour />
      <HeroBanner />
      <Brand />
      <AboutBrand />
      <FeatureArea />
      <AppFaqArea />
      <AppNewsletter />
      <PriceArea />
      <AppTestimonial />
      <Blog />
      <FooterThree style_4={true} />
    </>
  );
};

export default HomeFour;
