import React from "react";

function Office() {
  return (
    <div className="office my-5">
      <div className="shop-details flex item-center justify-around gap-5 my-3">
        <div className="shop-address flex flex-col sm:flex-row items-center gap-5">
          <div className="">
            <i class="fa-solid fa-location-dot text-2xl text-red-500"></i>
          </div>
          <div>
            <h1>Viviana Mall</h1>
            <h1>Thane West, Maharashtra </h1>
          </div>
        </div>
        <div className="shop-mobile flex flex-col sm:flex-row items-center gap-5">
          <div className="">
            <i class="fa-solid fa-phone-volume text-2xl text-red-500"></i>
          </div>
          <div>+91-XXXXXXXXXX</div>
        </div>
      </div>
      <div className="shop-location my-3 p-10">
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6919150453227!2d72.9690864749809!3d19.208654082023397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b97304d636f1%3A0xd7d62dc2bdd3f9cc!2sViviana%20Mall!5e0!3m2!1sen!2sin!4v1712753324389!5m2!1sen!2sin"
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Office;
