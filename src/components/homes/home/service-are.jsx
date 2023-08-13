import Link from "next/link";
import React from "react";

// service data
const service_data = [
  {
    id: 1,
    icon: "assets/img/services/icon/service-icon-1.png",
    naem: "Digital Marketing",
    link: "service",
    delay: ".3s",
  },
  {
    id: 2,
    icon: "assets/img/services/icon/service-icon-2.png",
    naem: "UI & UX Design",
    link: "service-3",
    delay: ".4s",
  },
  {
    id: 3,
    icon: "assets/img/services/icon/service-icon-3.png",
    naem: "Game Develop",
    link: "service-2",
    delay: ".6s",
  },
  {
    id: 4,
    icon: "assets/img/services/icon/service-icon-4.png",
    naem: "Business Consult",
    link: "service",
    delay: ".3s",
  },
  {
    id: 5,
    icon: "assets/img/services/icon/service-icon-5.png",
    naem: "24/7 Support",
    link: "contact",
    delay: ".3s",
  },
];

const service_content = {
    name: "Services",
    title: <> The Rewards From Putting <br /> Our Customers</>
}

const {name, title}  = service_content
const ServiceAre = () => {
  return (
    <>
      <div className="tp-bs-service pt-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <span
                    className="tp-section__subtitle white-bg mb-15 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    <i className="before-border"></i> {name}
                    <i className="after-border"></i>
                  </span>
                  <h2
                    className="tp-section__title mb-30 wow tpfadeUp"
                    data-wow-delay=".5s"
                  >
                   {title}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-bs-service pb-55 tp-border-bottom pt-35">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
              {service_data.map((item, i) => (
                <div
                  key={i}
                  className="col wow tpfadeUp"
                  data-wow-delay={item.delay}
                >
                  <div className="tp-bs-service-box text-center pt-40 pb-40 mb-25">
                    <div className="tp-bs-sv-icon mb-25">
                      <img src={item.icon} alt="" />
                    </div>
                    <h3 className="tp-bs-sv-title">
                      <Link href={item.link}> {item.naem}</Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tp-bs-service-review text-center pt-40 pb-40 wow tpfadeUp">
            <div className="tp-bs-sv-avata d-lg-inline-block pr-25">
              <img src="/assets/img/services/service-avatas.png" alt="" />
            </div>
            <p className="d-inline-block pr-5">
              Here are some of the rewards from putting our customers first.
            </p>
            <Link href="/contact">
              Make Request
              <span>
                <i className="fal fa-long-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAre;
