import SocialLinks from '@/src/common/social-links';
import Link from 'next/link';
import React from 'react';
import CommonFooter, { FooterCopyRight } from './common-footer';

// footer_links data
const footer_links = [
   {
      id: 1,
      title: "Company",
      col: "col-xl-3",
      id: "company",
      links: [
         {title: "About", link: "/about"},
         {title: "Affiliates", link: "/faq"},
         {title: "Careers", link: "/job"},
         {title: "Legal & Privacy", link: "/privacy-policy"},
         {title: "Our Team", link: "/team"},
         {title: "Refund Policy", link: "/privacy-policy"},
         {title: "Terms & Rules", link: "/terms"},
         {title: "Get In Touch", link: "/contact"},
         {title: "other", link: "/"},
      ]
   },
   {
      id: 2,
      title: "Services",
      col: "col-xl-2",
      id: "",
      links: [
         {title: "Business Consultancy", link: "/"},
         {title: "Web Development", link: "/"},
         {title: "UI & UX Design", link: "/"},
         {title: "Legal & Privacy", link: "/privacy-policy"},
         {title: "Engine Optimization", link: "/"},
         {title: "Digital marketing", link: "/"},
      ]
   },
   
]

const footer_content ={
   footer_logo: "/assets/img/logo/programming-agency-logo-long.png",
   about: "About Us",
   about_des: <>Your goals are individual. We believe business advice should be too, so we have to help your business thrive in this work
   environment situation.</>,
   phone_icon: "/assets/img/footer/call-icon.png",
   address: <>Kurigram, Bangladesh</>,
   phone: <>015-1891-9421</>,
   
}

const {footer_logo, about, about_des, phone_icon ,address, phone} = footer_content


const Footer = ({tp_border}) => {
    return (
      <>
        <footer>
          <div className={`bs-footer ${true && "tp-border-top"}`}>
            <div className="container">
              <div className="bs-footer__top fotter-btn-bottom pt-100 pb-40 d-none d-md-block">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="bs-footer__top-logo">
                      <a href="#">
                        <img style={{height: '60px'}} src={'/assets/img/logo/programming-agency-logo-long.png'} alt="brand-logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-6 text-md-end">
                    <div className="bs-footer__top-social">

                     <SocialLinks />
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="bs-footer__main pb-10 pt-80 tp-border-bottom">
                <div className="row justify-content-center">
                  <div className="col-xl-3 col-md-6">
                    <div className="tp-footer__widget mb-40">
                      <h3 className="tp-footer__widget-title mb-35">{about}</h3>
                      <p className="pr-40">{about_des}</p>
                    </div>
                    <div className="tp-footer-cta d-flex align-items-center">
                      <span className="call-icon">
                        <img src={phone_icon} alt="" />
                      </span>
                      <span>
                        <span className="d-block mb-0">{address}</span>
                        <b>
                          <a href={`callto: ${'+8801518919421'}`}> Call Us: {phone}</a>
                        </b>
                      </span>
                    </div>
                  </div>
                  {/* Coommon Footer start */}
                  <CommonFooter />
                  {/* Coommon Footer end */}

                  <div className="col-xl-4 col-md-6">
                    <div className="tp-footer__widget bs-pl-60 mb-40">
                      <h3 className="tp-footer__widget-title mb-35">
                        Subscribe Now
                      </h3>
                      <p>Subscribe to get the latest news from us</p>

                      <div className="tp-footer-from p-relative">
                        <form onSubmit={(e) => e.preventDefault()}>
                          <span>
                            <i className="fas fa-envelope-open"></i>
                          </span>
                          <input type="email" placeholder="Enter your mail" />
                          <button type="submit">
                            <i className="fas fa-paper-plane"></i> <b></b>
                          </button>
                        </form>
                      </div>
                      <p className="tp-form-note p-0 mt-5 mb-30">
                        
                        <span>**</span>We are not going to save your data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer copy right start */}
              <FooterCopyRight/>
              {/* footer copy right end */}
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer;