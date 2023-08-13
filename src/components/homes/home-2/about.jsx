import React from "react";
import Tilt from "react-parallax-tilt";


 const about_home_two_content = {
    sub_title: "Since From 2000",
    title: <> Obtaining Further IT <br /> By Make a Contact</>,
    des: <>Being employee-owned keeps us focused on the unique needs of our <br />
            users, and we wouldn't have it any other way. Our many
            security features <br />
            include Multi Factor Authentication, auto-enabled sFTP .</>,
    author_img: "/assets/img/about/it-ab-avata.png",
    author_name: "Alonso D. Cosdos",
    author_title: "Head Of Idea",
    author_des: <>Highly Tailored IT Design, Management & Support Services.
    It’s possible to simultaneously manage.</>,
    about_img: "/assets/img/about/it-about-img.jpg",
    logo: "/assets/img/logo/Logo.png",
 }


 const {sub_title, title, des,author_img, author_name, author_title, author_des, about_img, logo} = about_home_two_content
const About = () => {
  return (
    <>
      <div className="tp-it-about theme-bg-2 pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tp-it-about-info mb-30">
                <div className="section-title-wraper tp-border-bottom mb-40">
                  <div className="tp-section">
                    <span className="tp-section__subtitle vogue-text-color white-bg mb-15 wow tpfadeUp">
                      <i className="before-border"></i> {sub_title}
                    </span>
                    <h2
                      className="tp-section__title vogue-text-color mb-30 wow tpfadeUp"
                      data-wow-delay=".3s"
                    >
                        {title} 
                    </h2>
                    <p className="wow tpfadeUp" data-wow-delay=".4s">
                        {des} 
                    </p>
                  </div>
                </div>
                <div
                  className="tp-it-author-info wow tpfadeUp"
                  data-wow-delay=".5s"
                >
                  <p>
                    {author_des} 
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="it-about-avata">
                      <img src={author_img} alt="author" />
                    </div>
                    <div className="it-about-name">
                      <span>{author_title}</span>
                      <b>{author_name}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-it-about-right mb-30 wow tpfadeUp">
              <Tilt
                    className="tilt-img"
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={900}
                    transitionSpeed={1000}
                    gyroscope={true}
                  >
                <div
                  className="tp-it-about-img text-end p-relative w-img"
                  data-tilt=""
                  data-tilt-perspective="2000"
                >
                  <img
                    src={about_img}
                    alt="image-here"
                  />
                  <div className="it-ab-cirlce-logo">
                    <img style={{height: '60px'}} src={logo} alt="logo-here" />
                  </div>
                </div>
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
