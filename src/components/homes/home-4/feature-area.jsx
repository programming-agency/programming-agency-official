import Link from "next/link";
import React from "react";


const feature_data = [
    {
        id: 1,
        icon: "/assets/img/icons/app-fea-icon-1.png",
        title: <>Cloud Compatible</>,
        des: <>Software is a collection of instructions that tell a computer how to work in the other way.</>
    },
    {
        id: 2,
        icon: "/assets/img/icons/app-fea-icon-2.png",
        title: <>Check Compatible</>,
        des: <>Software is a collection of instructions that tell a computer how to work in the other way.</>
    },
    {
        id: 3,
        icon: "/assets/img/icons/app-fea-icon-3.png",
        title: <>Code Compatible</>,
        des: <>Software is a collection of instructions that tell a computer how to work in the other way.</>
    },
    {
        id: 4,
        icon: "/assets/img/icons/app-fea-icon-4.png",
        title: <>More Compatible</>,
        des: <>Software is a collection of instructions that tell a computer how to work in the other way.</>
    },
]


const FeatureArea = () => {
  return (
    <>
      <div className="tp-app-feature theme-bg-3 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <span
                    className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    <i className="far fa-circle"></i>
                    Core Features
                    <i className="far fa-circle"></i>
                  </span>
                  <h2
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Through Our Application
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {feature_data.map((item, i) => (
              <div key={i} className="col-lg-6 col-12">
                <div
                  className="app-feature-box d-flex white-bg p-relative wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div className="app-feature-box-icon">
                    <img src={item.icon} alt="iclud" />
                  </div>
                  <div className="app-feature__info">
                    <h4 className="app-feature__title text-mirage">
                      <Link href="/service-2">{item.title}</Link>
                    </h4>
                    <span>{item.des} </span>
                  </div>
                  <div className="app-feature__arrow">
                    <span>
                      <a href="#">
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
