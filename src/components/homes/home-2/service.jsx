import service_data from "@/src/data/service-data";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <>
      <div className="tp-it-service pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">
                  <span className="tp-section__subtitle vogue-text-color white-bg mb-15 wow tpfadeUp">
                    <i className="before-border"></i>
                    Services <i className="after-border"></i>
                  </span>
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Custom IT Services and <br /> Solutions Built
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row it-sv-counter">
            {service_data.slice(0, 3).map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="it-service__item mb-30 text-center wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div className="it-servicce__item-img mb-35">
                    <img src={item.img} alt="image-here" />
                  </div>
                  <h3 className="it-service__item-title mb-20">
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                  <p className="mb-0">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

