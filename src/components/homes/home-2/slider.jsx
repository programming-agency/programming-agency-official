import Link from "next/link";
import React,{useState, useEffect} from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import {   Autoplay, EffectFade, Navigation } from 'swiper';



const slider_data = [
  {
    id: 1,
    bg_img: "/assets/img/slider/it-slider-2.jpg",
    title: "IT Solutions For Business",
    des: <>We’ve always known that for businesses large and small, IT
    will <br /> can be a real challenge to manage.</>,
    btn_text: "Free Consultation",
    slder_quite: <><b> “ Simplicity is key to success for <br /> growing your business ” </b> <span> Mixodis C. <i>- Head of Idea </i> </span></>
  },
  {
    id: 2,
    bg_img: "/assets/img/slider/it-slider-1.jpg",
    title: "IT Solutions For Business",
    des: <>We’ve always known that for businesses large and small, IT
    will <br /> can be a real challenge to manage.</>,
    btn_text: "Free Consultation",
    slder_quite: <><b> “ Simplicity is key to success for <br /> growing your business ” </b> <span> Mixodis C. <i>- Head of Idea </i> </span></>
  },
  {
    id: 3,
    bg_img: "/assets/img/slider/it-slider-3.jpg",
    title: "IT Solutions For Business",
    des: <>We’ve always known that for businesses large and small, IT
    will <br /> can be a real challenge to manage.</>,
    btn_text: "Free Consultation",
    slder_quite: <><b> “ Simplicity is key to success for <br /> growing your business ” </b> <span> Mixodis C. <i>- Head of Idea </i> </span></>
  },
];



const Slider = () => {

    const [isLoop, setIsLoop] = useState(false);
    useEffect(() => {
      setIsLoop(true);
    }, []);

    
  return (
    <>
      <div className="tp-it-slider-area">
        <Swiper
          loop={isLoop}
          modules={[Navigation, Autoplay, EffectFade]}
          autoplay={{
            delay: 5000,
          }}
          effect="fade"
          className="swiper-container ptg-slider-active"
        >
          {slider_data.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="tp-it-slider it-slider-height fix"
                style={{
                  backgroundImage: `url(${item.bg_img})`,
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="it-slider__content">
                        <h2
                          className="it-slider__content-title mb-20"
                          data-animation="tpfadeUp"
                          data-delay=".5s"
                        >
                          {item.title}
                        </h2>
                        <p
                          className="mb-50"
                          data-animation="tpfadeUp"
                          data-delay=".6s"
                        >
                          {item.des}
                        </p>
                        <Link
                          href="/contact"
                          className="tp-slider-btn orange-chat-color tp-btn-hover alt-color alt-bg-orange"
                          data-animation="tpfadeUp"
                          data-delay=".9s"
                        >
                          <span className="mr-10">
                            <i className="fas fa-comments"></i>
                            <i className="fas fa-comments"></i>
                          </span>
                          {item.btn_text}
                          <b></b>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                      <div className="it-slider-img p-relative">
                        <img
                          src="/assets/img/slider/it-slider-img.png"
                          alt="image-here"
                        />
                        <div className="it-slder-quite">{item.slder_quite}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
