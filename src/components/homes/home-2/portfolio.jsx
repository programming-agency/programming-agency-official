import Link from 'next/link';
import React from 'react';


// portfolio_data 
const portfolio_data = [
    {
        id: 1, 
        img: "/assets/img/portfolio/it-pt-1.jpg",
        logo: "/assets/img/portfolio/logo/pt-logo-1.png", 
        sub_title: "Cyber Security, IT Solution ",
        title: <>Currency check and easier tracking system</>,
        delay: ".3s"
    },
    {
        id: 2, 
        img: "/assets/img/portfolio/it-pt-2.jpg",
        logo: "/assets/img/portfolio/logo/pt-logo-2.png", 
        sub_title: "Cyber Security, IT Solution ",
        title: <>Currency check and easier tracking system</>,
        delay: ".4s"
    },
    {
        id: 3, 
        img: "/assets/img/portfolio/it-pt-3.jpg",
        logo: "/assets/img/portfolio/logo/pt-logo-3.png", 
        sub_title: "Cyber Security, IT Solution ",
        title: <>Currency check and easier tracking system</>,
        delay: ".5s"
    },    

]

const Portfolio = () => {
    return (
        <>
    <div className="tp-it-portfolio pt-120 pb-120">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="section-title-wraper pb-80">
                     <div className="tp-section text-center">
                        <span className="tp-section__subtitle vogue-text-color white-bg mb-15 wow tpfadeUp"><i className="before-border"></i>
                           Portfolio <i className="after-border"></i></span>
                        <h2 className="tp-section__title vogue-text-color wow tpfadeUp" data-wow-delay=".3s">Eliminate IT Compitators</h2>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
                {
                  portfolio_data.map((item, i )  =>
                  <div key={i} className="col-lg-6 col-xl-4">
                  <div className="tp-porffolio-wrapper mb-30" >
                     <div className="it-portfolio-item wow tpfadeUp" data-wow-delay={item.delay}>
                        <div className="it-portfolio-item__thumb w-img p-relative">
                           <img src={item.img} alt={item.title} />
                           <div className="it-portfolio-item__thumb-logo">
                              <img src={item.logo} alt={item.title} />
                           </div>
                        </div>
                        <div className="it-portfolio-item__content it-pt-border">
                           <div className="it-portfolio-item__meta">
                              <a href="#">{item.sub_title}</a>                              
                           </div>
                           <h3 className="it-portfolio-item__title">
                              <Link href="/portfolio-2"> {item.title} </Link>
                           </h3>
                        </div>
                     </div>
                     <div className="tp-pt-full-btn">
                        <a href="#" className="it-portfolio-item__btn"> Case Details
                           <span className="mt-5">
                              <i className="fal fa-long-arrow-right"></i>
                              <i className="fal fa-long-arrow-right"></i>
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
                  )
                }
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="it-portfolio-btn-wrapper text-center mt-20">
                     <Link href="/portfolio-3" className="tp-border-btn vogue-text-color tp-btn-hover alt-bg-orange">other works
                        <span>
                           <i className="fal fa-long-arrow-right"></i>
                           <i className="fal fa-long-arrow-right"></i>
                        </span>
                        <b></b>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default Portfolio;