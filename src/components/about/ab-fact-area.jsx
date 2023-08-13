import Count from '@/src/common/count';
import React from 'react';

const about_feature_data = [
    {
        id: 1,
        count: 328,
        title: "Successful projects",
        description: <>You every can't thing seed subdue subdue light female.</>,
    },
    {
        id: 2,
        count: 522,
        title: "Years of exeperience",
        description: <>You every can't thing seed subdue subdue light female.</>,
    },
    {
        id: 3,
        count: 1020,
        title: "Cost of savings",
        description: <>You every can't thing seed subdue subdue light female.</>,
    },
    {
        id: 4,
        count: 256,
        title: "Email leads generated",
        description: <>You every can't thing seed subdue subdue light female.</>,
    },
]

const AbFactArea = () => {
    return (
      <>
        <div
          className="tp-ab-fact-area fact-overlay p-relative pt-120 pb-85"
          style={{
            backgroundImage: `url(/assets/img/about/about-fact-bg.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              {about_feature_data.map((item, i) => (
                <div key={i} className="col-xl-3 col-md-6">
                  <div className="ab-fact-item mb-30">
                    <Count number={item.count} /> 
                    <h3 className="ab-fact-item__title">
                      <a href="#">{item.title}</a>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default AbFactArea;