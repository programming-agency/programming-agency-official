import React from "react";
import Tilt from 'react-parallax-tilt';

// about_brands_content
const about_brands_content = {
    dashboard_img: "/assets/img/about/app-dashboard-1.jpg",
    chart_img: "/assets/img/about/app-chart.png",
    title: "About App",
    main_title: "Mobile & Web App Redefined."
}
const {dashboard_img, chart_img, title, main_title} = about_brands_content

// features_list
const features_list = [
    <>"Features include Multi Factor Authentication"</>,
    <>We strongly believe in providing open source solutions</>
]


const AboutBrand = () => {
  return (
    <>
      <div className="tp-app-about pb-90">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-xl-7 col-lg-6 wow tpfadeUp">

            <Tilt
                className="tilt-img"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={900} 
                transitionSpeed={1000}
                gyroscope={true}
            >
                 
            
              <div
                className="tp-about-img-wrapper p-relative"
                data-tilt=""
                data-tilt-perspective="2000"
              >
                <div className="tp-app-about-img d-inline-block">

                  <img src={dashboard_img} alt="" />
                  <div className="app-chart-img">
                    <img src={chart_img} alt="" />
                  </div>
                </div>
              </div>
              </Tilt>

            </div>
            <div
              className="col-xl-5 col-lg-6 wow tpfadeUp"
              data-wow-delay=".4s"
            >
              <div className="tp-da-about-info mb-30">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <span className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size">
                      <i className="far fa-circle"></i>
                      {title}
                    </span>
                    <h2 className="tp-section__title mb-30 text-mirage">
                      {main_title}
                    </h2>
                  </div>
                </div>
                <div className="tp-app-about-fea pb-25 mb-10">
                  <ul>
                    {features_list.map((list, i) => (
                      <li key={i}>
                        <span>
                          <i className="fal fa-check"></i>
                        </span>
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tp--indo-btns">
                  <div className="tp-app-link-btn">
                    <a
                      href="#"
                      className="tp-grey-btn tp-btn-hover alt-black-color"
                    >
                      learn more
                      <span className="ml-10">
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </span>
                      <b></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBrand;
