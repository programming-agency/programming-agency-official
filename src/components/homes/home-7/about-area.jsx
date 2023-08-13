
import React from 'react';


const about_content = {
    img_1: "/assets/img/about/law--aout-1.jpg",
    img_2: "/assets/img/about/law-about-2.jpg",
    img_3: "/assets/img/about/law-icon.png",
    img_4: "/assets/img/about/it-ab-avata.png",
    img_5: "/assets/img/about/law-signature.png", 

    left_title: "Good Expertise In Law",
    title: <>about our lawyer <br /> firm agency</>,
    about_P_title: <>We help you build and  grow your business.</>,
    des: <>Lawyer's content marketing strategy should include adding & updating your most important and high-performing. Certain circumstances seds
    owing to the claims duty ourighteous.</>,
}

const {img_1, img_2, img_3, img_4, img_5,  left_title, title,about_P_title, des}  = about_content 



const about_feature_data = [
    {
        id: 1,
        icon: "/assets/img/about/low-about-icon-1.png",
        about_icon: "/assets/img/about/icon-ab-chat.png",
        text: <>Tailored Advice <br /> & Support</>
    },
    {
        id: 2,
        icon: "/assets/img/about/law-about-icon-2.png",
        about_icon: "/assets/img/about/icon-tp-laptop.png",
        text: <>Tailored Advice <br /> & Support</>
    },
]


const AboutArea = ({style_about}) => {
    return (
        <>
        <div className="law-about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 wow tpfadeUp">
                        <div className="law-about-left p-relative mb-30">
                            <div className="row gx-4">
                                <div className="col-md-6">
                                    <div className={`law-about-left-title mt-60 mb-20 ${style_about ? "vogue-bg" : "wine-bg"} `}>
                                        <span><i className="flaticon-global"></i></span>
                                        <span>{left_title}</span>
                                    </div>
                                    <div className="law-about-img-1">
                                    
                                        <img src={img_1} alt="" />
                                    
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="law-about-img-2">
                                        <img src={img_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={`law-icon ${style_about && "law-icon-text"}`}>

                                {
                                    style_about ? 
                                    <div className="d-inline-block p-relative">
                                        <div>
                                            <img src="/assets/img/about/law-sm-img-3.png" alt="" />
                                        </div>
                                        <div className="law-icon-info">
                                            <span><b>30</b>Years Experience</span>
                                        </div>
                                    </div>
                                    :

                                <img src={img_3} alt="" />
                                }

                            </div>
                            <div className={`red-dot ${style_about ? "law-ab-dot" : ""}`}>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow tpfadeUp">
                        <div className="mb-50">
                            <div className="section-title-wraper mb-40">
                                <div className="tp-section">
                                 
                                    <h2 className={`tp-section__title ${style_about ? "wow tpfadeUp mb-30" : "wine-text-color mb-20 text-uppercase"}`}>
                                        { style_about ? about_P_title : title
                                        }
                                    </h2>
                                    <p className="text-grey">
                                        {des}
                                    </p>
                                </div>
                            </div>
                            <div className={`law-ab-author ${style_about ? "theme-bg" : "wine-bg mb-30"}`}> 
                                <div className="row align-items-center">
                                    <div className="col-sm-8 col-12 wow tpfadeUp">
                                        <div className="law-ab-avata-box d-flex align-items-center">
                                            <div className="law-ab-avata mr-20">
                                                <img src={img_4} alt="" />
                                            </div>
                                            <div className="law-ab-author-head">
                                                <span className={`${style_about && "cornblue-text-color"}`}>Head Of Idea</span>
                                                <h4 className={`law-ab-auther-name ${style_about && "text-black"}`}>Alonso D. Cosdos</h4>
                                            </div>
                                        </div>
    
                                    </div>
                                    <div className="col-sm-4 d-none d-sm-block wow tpfadeUp" data-wow-delay=".4s">
                                        <div className="law-author-signature text-end">
                                            {
                                                style_about && <img src="/assets/img/about/signature-ab.png" alt="" />
                                            }
                                            <img src={img_5} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gx-md-5">
                            {about_feature_data.map((item, i) =>
                                <div key={i} className="col-sm-6 col-12">
                                        <div className="low-ab-feature d-flex align-items-center">
                                            <div className="low-ab-fea-icon mr-20">
                                                <img src={ `${style_about ? item.about_icon : item.icon}` } alt={item.text} />
                                            </div>
                                            <div>
                                            <h4 className="law-ab-fea-title wine-text-color text-uppercase">
                                            {item.text}
                                            </h4>
                                        </div>  
                                    </div>                                          
                                </div>
                            )}
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