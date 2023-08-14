import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonial_data_home_two = [
  {
    id: 1,
    img: "/assets/img/testimonial/mohoshinsera.webp",
    name: "Mohoshin Sera",
    title: "Client, Fiverr.com",
    des: (
      <>
        “ I just wanted to take a moment to recognize your outstanding work on the latest project. Your development skills and attention to detail truly made a difference in the final product. Excellent Coding Skills, Problem-Solving Abilities, Proactive Communication, Strong Team Player: ”
      </>
    ),
  },
  {
    id: 2,
    img: "https://flagpedia.net/data/flags/w1600/fr.png",
    name: "D. Thomas",
    title: "Client, Fiverr.com",
    des: (
      <>
        “ Good communication of this service, which was based on fixing a bug in React. They were quick to respond and helped me resolve the problem at hand. Couldn't ask for more. Many Thanks again for their work. Awesome :) ”
      </>
    ),
  },
  {
    id: 3,
    img: "/assets/img/testimonial/jadzalla.webp",
    name: "Jad Zalla",
    title: "Client, Fiverr.com",
    des: (
      <>
        “ Well, this is my go-to guy for matter Server and panel. Always fast and diligent! Cant ask for anything better. Thank you my brother for remaining true to yourself and always thriving to provide the best service to your clients. ”
      </>
    ),
  },
  {
    id: 4,
    img: "/assets/img/testimonial/pro_wordsmiths.webp",
    name: "Word Smiths",
    title: "Client, Fiverr.com",
    des: (
      <>
        “ Was prompt at delivering the order. very satisfied with his service ”
      </>
    ),
  },
  {
    id: 5,
    img: "/assets/img/testimonial/shahjes.webp",
    name: "Shahjes",
    title: "Client, Fiverr.com",
    des: (
      <>
        “ Very good service. One of the most skillful and dedicated freelancers I ever got to work with. He goes above and beyond to make you happy. Will definitely work with him again. ”
      </>
    ),
  },
  {
    id: 6,
    img: "/assets/img/testimonial/vladismenko.webp",
    name: "Vladis Menko",
    title: "Client, Fiverr.com",
    des: (
      <>
        “ It is easy to communicate with Mr. Hasan - English is fluent. He responds quickly and consistently to all my questions. What I really like is that you can depend on him to respond. He got the job done and He also makes helpful recommendations.  ”
      </>
    ),
  },
];




const setting = {
  slidesPerView: 3,
  spaceBetween: 30, 
  navigation: {
    nextEl: ".it-testi-button-next",
    prevEl: ".it-testi-button-prev",
  },
  breakpoints: {
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 1,
    },
    '768': {
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}



const Testimonial = () => {

  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
    
<div className="tp-it-testimonial fix pb-120">
         <div className="it-testi-wraper theme-bg-2 pt-120 pb-125">
            <div className="container">
               <div className="row ">
                  <div className="col-12 col-md-8">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <span className="tp-section__subtitle vogue-text-color white-bg mb-15"><i
                                 className="before-border"></i>
                              Testimonials</span>
                           <h2 className="tp-section__title vogue-text-color mb-70">Users Feedback</h2>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 d-none d-md-block">
                     <div className="it-testi-navigation text-end p-relative pt-40">
                        <div className="it-testi-button-prev">
                           <i className="fal fa-long-arrow-left"></i>
                           
                        </div>
                        <div className="it-testi-button-next">
                           <i className="fal fa-long-arrow-right"></i>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <Swiper 
            {...setting}
            loop={isLoop}
            modules={[Navigation]}            
            className="tp-it-testi-active swiper-container">

              {testimonial_data_home_two.map((item, i )  => 
                <SwiperSlide key={i} className="it-testimonial swiper-slide" >
                     <div className="it-testimonial-box p-relative">
                        <div className="it-testimonial-box__ratting">
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                           <i className="fas fa-star"></i>
                        </div>
                        <div className="it-testimonial-box__review">
                           {item.des}
                        </div>
                        <div className="it-testimonial-bg">
                           <img  src="/assets/img/testimonial/testi-icon-bg.png" alt="them-pure" />
                        </div>
                     </div>
                     <div className="tp-testimonial-reviewer d-flex align-items-center ml-40">
                        <div className="tesi-reviewer-avata mr-15">
                           <img style={{height: '60px', width: '60px', borderRadius: '100px'}} src={item.img} alt="them-pure" />
                        </div>
                        <div className="it-tesi-reviewer-name">
                           <h4 className="mb-5 vogue-text-color">{item.name}</h4>
                           <span>{item.title}</span>
                        </div>
                     </div>
                  </SwiperSlide>                
                
                )
              }
            </Swiper>
         </div>

      </div>

    </>
  );
};

export default Testimonial;
