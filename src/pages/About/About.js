import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-3xl text-primeColor font-semibold mb-4">
          Welcome to The CouponsPort
        </h1>
        <p className="max-w-[800px] text-lg text-lightText leading-7">
          At The CouponsPort, we're passionate about helping you unlock incredible savings and embrace rewarding shopping experiences. Our mission is to be your trusted go-to spot where deals come to life. We understand that in today's world, every penny counts, and that's why we've made it our mission to bring you the best deals and coupons to make your shopping more affordable.
        </p>
      </div>
      <div className="py-10">
        <h2 className="text-2xl text-primeColor font-semibold mb-4">Our Mission</h2>
        <p className="max-w-[800px] text-lg text-lightText leading-7">
          Our mission is to make your online shopping experience delightful by providing you with the latest coupons, deals, and cashback offers. We are dedicated to helping you save money and find the best bargains for your favorite products and brands. Additionally, we're excited to introduce our emerging e-commerce shop, where you can discover and purchase a curated selection of quality products.
        </p>
      </div>
      <div className="py-10">
        <h2 className="text-2xl text-primeColor font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside max-w-[800px] text-lg text-lightText pl-5">
          <li>Wide range of coupon codes and discounts.</li>
          <li>Earn cashback rewards on your purchases.</li>
          <li>Easy-to-use platform for effortless savings.</li>
          <li>Personalized recommendations tailored to your preferences.</li>
          <li>Expert blogs with shopping tips and budgeting advice.</li>
          <li>Explore our e-commerce shop for handpicked products.</li>
        </ul>
      </div>
      <div className="py-10">
        <h2 className="text-2xl text-primeColor font-semibold mb-4">Contact Us</h2>
        <p className="max-w-[800px] text-lg text-lightText leading-7">
          Have questions, suggestions, or need assistance? Feel free to get in touch with us. We're here to help you!
        </p>
        <div className="flex flex-col space-y-2">
          <p className="text-lightText">
            Email: <a href="mailto:contact@thecouponsport.com">contact@thecouponsport.com</a>
          </p>
          <p className="text-lightText">
            Phone: +1 (123) 456-7890
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
