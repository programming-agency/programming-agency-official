import React from "react";

const MapArea = () => {
  return (
    <>
      <div className="tp-contact-map p-relative">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36782.94540876516!2d90.37603340013305!3d23.842391820212733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1658828924640!5m2!1sen!2sbd"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-map-img">
          <img src="/assets/img/cta/contact-map-logo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default MapArea;
