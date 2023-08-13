import React from 'react';
import Tilt from 'react-parallax-tilt';




const portfolio_data =[
    {
        id: 1,
        title: "Eco Dominson App",
        city: "New York",
        hover_img: "/assets/img/portfolio/ha-pf-img.jpg",
    },
    {
        id: 2,
        title: "MicDrop Agency Website",
        city: "Japan",
        hover_img: "/assets/img/portfolio/ha-pf-img-1.jpg",
    },
    {
        id: 3,
        title: "Atypikal Crypto",
        city: "Captown",
        hover_img: "/assets/img/portfolio/ha-pf-img-2.jpg",
    },
    {
        id: 4,
        title: "Gionix NFT Marketplace",
        city: "Uganda",
        hover_img: "/assets/img/portfolio/ha-pf-img-3.jpg",
    },
]



const MpPortfolio = () => {
  return (
    <>
      <div className="mp-portfolio ha-portfolio pt-120 pb-120 black-bg fix">
        <div className="container">
          {portfolio_data.map((item, i) => (
            <div
              key={i}
              className="mp-portfolio-item d-flex justify-content-between align-items-center p-relative"
            >
              <div className="mp-portfolio-info wow tpfadeUp">
                <h3 className="mp-portfolio-title">
                  <a href="#">{item.title}</a>
                </h3>
                <div
                  className="mp-portfoio-img p-relative"
                  data-tilt=""
                  data-tilt-perspective="2000"
                >

              <Tilt
                className="tilt-img"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={900} 
                transitionSpeed={1000}
                gyroscope={true}
                >             
                  <img src={item.hover_img} alt="theme-pure" />
                </Tilt>
                </div>
              </div>
              <div className="mp-portfolio-tag">
                <span>
                  <a href="#">{item.city}</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MpPortfolio;