import React from 'react';


// ****** Accordion Data ****** //
const accordion_data = [
    {
        id: 1,
        question: "Usability Testing",
        answer: <>On the other hand we denounce with righteous indignation &
        dislike men who are so beguiled and demoralized by the charms
        of pleasure of the moment.</>,
        accordion_id: "faq1",
        collapsed: "",
        data_bs_target: "#collapseOne",
        aria_expanded: true,
        aria_controls: "collapseOne",
        show: "show",
      },
      {
        id: 2,
        question: "Design Making & Develop",
        answer:  <>Research helps you plan the best way to get your product from the manufacturer
        to the retail shelf. In addition to deciding which retailers should carry your
        product, you should determine where your inventory will be held.Research helps.</>,
        accordion_id: "faq2",
        collapsed: "collapsed",
        data_bs_target: "#collapseTwo",
        aria_expanded: false,
        aria_controls: "collapseTwo",
        show: "",
      },
      {
        id: 3,
        question: "Refund Policy",
        answer:  <>On the other hand we denounce with righteous indignation &
        dislike men who are so beguiled and demoralized by the charms
        of pleasure of the moment.</>,
        accordion_id: "faq3",
        collapsed: "collapsed",
        data_bs_target: "#collapseThree",
        aria_expanded: false,
        aria_controls: "collapseThree",
        show: "",
      },
]



const Accordion = () => {
  return (
    <>
      {accordion_data.map((item, i) => (
        <div key={i} className="accordion-item">
          <h2 className="accordion-header" id={item.accordion_id}>
            <button
              className={`accordion-button ${item.collapsed}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={item.data_bs_target}
              aria-expanded={item.aria_expanded}
              aria-controls={item.aria_controls}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={item.aria_controls}
            className={`accordion-collapse collapse ${item.show}`}
            aria-labelledby={item.accordion_id}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;