import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "../homes/home-7/about-area";
import AbFactArea from "./ab-fact-area";
import AboutDeatialsArea from "./about-deatials-area";
import CtaAre from "./cta-are";
import TeamArea from "./team-area";
import FeatureArea from "./feature-area";

const About = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea />
      <AboutArea style_about={true} />
      <AbFactArea />
      <TeamArea />
      <FeatureArea />
      <AboutDeatialsArea />
      <CtaAre />
      <Footer />
    </>
  );
};

export default About;
