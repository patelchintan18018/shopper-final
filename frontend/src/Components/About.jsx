import React from 'react';
import p1_product_i2 from '../Assets/p1_product_i2.png'

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-head mb-4">About Our Clothing Store</h1>
      <div className="flex flex-col md:flex-row items-stretch mt-16">
        {/* <div className="w-full md:w-1/2 flex items-center">
          <img
            className="w-full h-auto rounded-lg shadow-md mb-4"
            src={p1_product_i2}
            alt="Clothing Store"
          />
        </div> */}
        <div className="w-full ">
          <p className="text-lg mb-4">
            Welcome to our clothing store! We are passionate about providing
            high-quality, stylish clothing for all occasions. Our mission is to
            make you look and feel great every day.
          </p>
          <p className="text-lg mb-4">
            Our collection features a wide range of clothing items, from casual
            wear to formal attire. Whether you're looking for the perfect
            outfit for a night out or comfortable loungewear for a cozy day at
            home, we've got you covered.
          </p>
          <p className="text-lg mb-4">
            At our store, we believe in offering not only great products but
            also exceptional customer service. Our team is dedicated to helping
            you find the perfect pieces to express your unique style.
          </p>
          <p className="text-lg">
            Thank you for choosing our clothing store. We look forward to
            serving you and helping you create your perfect wardrobe!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
