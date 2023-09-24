import React from "react";
import Banner from "../../components/Banner/Banner";
import Sale from "../../components/home/Sale/Sale";
import CouponCarousel from '../Coupon/CouponCarousel';

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <CouponCarousel /> {/* Add the CouponCarousel component here */}
      <div className="max-w-container mx-auto px-4">
        <Sale />
      </div>
    </div>
  );
};

export default Home;
