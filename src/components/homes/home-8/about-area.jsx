import React from 'react';
import Tilt from "react-parallax-tilt";



const about_content = {
    about_img: "/assets/img/about/ca-about.jpg",
    circle_img: "/assets/img/about/ca-cirlce-logo.png",
    about: "About",
    sub_title: "About Us",
    title: "To Make Your Digital Experience Brighter.",
    des: <>Being employee-owned keeps us focused on the unique needs of our
    users, and we wouldn't have it any other way. Our many security features
    include Multi Factor Authentication, auto-enabled sFTP .</>,
    author_img: "/assets/img/about/ca-about-sm.jpg",
    author_name: "Mikado Sinson",
    author_des:<>“ Find IT Marketing In Usa! Privacy Friendly. lways Facts. Unlimited Access. ”</>,
    phone: "78568065900",
    email : "info@gencio.com"


}

const {about_img, circle_img, about, sub_title, title, des, author_img, author_name, author_des, phone, email}  = about_content

const AboutArea = () => {
    return (
        <>
            <div className="ca-about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-xl-center">
                    <div className="col-lg-6 wow tpfadeUp" data-wow-delay=".5s">
                        <div className="ca-about-img p-relative mb-30" data-tilt="" data-tilt-perspective="2000">

                        <Tilt 
                            className="tilt-img"
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={900}
                            transitionSpeed={1000}
                            gyroscope={true}
                            >
                            <img src={about_img} alt="" />
                            <div className="ca-about-circle">
                                <img src={circle_img} alt="" />
                            </div>

                            </Tilt>
                        </div>
                    </div>
                    <div className="col-lg-6 wow tpfadeUp" data-wow-delay=".6s">
                        <div className="ca-about-info-wrapper ml-30 mr-30 mb-30">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <span className="tp-section__bigtitle">{about}</span>
                                    <span className="tp-section__subtitle shadow-none text-rgb mb-15 p-0">{sub_title}</span>
                                    <h2 className="tp-section__title mb-30">{title}</h2>
                                    <p>{des}</p>
                                </div>
                            </div>
                            <div className="ca-about-info tp-border-bottom d-md-flex align-items-center pb-40 mb-50">
                                <div className="ca-about-info__thumb mr-30">
                                    <img src={author_img} alt="" />
                                </div>
                                <div className="ca-about-info__content ">
                                    <h4 className="ca-about-info__content-title">{author_des} </h4>
                                    <span>{author_name}</span>
                                </div>

                            </div>
                            <div className="ca-about-btn-wrapper d-md-flex align-items-center">
                                <div className="ca-about-btn-wrapper mr-30 mb-30">
                                    <a href={`tel:${phone}`} className="tp-border-btn-rgb">
                                        Our Services
                                        <span>
                                            <i className="fal  fa-long-arrow-right"></i>
                                            <i className="fal  fa-long-arrow-right"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ca-about-cta mb-30">
                                    <span>Get Support</span> <br />
                                    <a  href={`mailto:${email}`}>{email}</a>
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

export default AboutArea;