// CouponSearch.js

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CouponSearch = ({ coupons }) => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCoupons, setFilteredCoupons] = useState([]);

  useEffect(() => {
    const filtered = coupons.filter((coupon) =>
      coupon.couponName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCoupons(filtered);
  }, [searchQuery, coupons]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative inline-block w-full md:max-w-[600px] mt-4">
      <input
        className="w-full h-[50px] px-6 text-base text-primeColor bg-white outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px] rounded-xl"
        type="text"
        onChange={handleSearch}
        value={searchQuery}
        placeholder="Search coupons here"
      />
      <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-4 w-5 h-5 text-primeColor" />
      {searchQuery && (
        <div className="w-full h-auto mt-2 bg-white shadow-2xl overflow-y-scroll scrollbar-hide">
          {filteredCoupons.map((coupon) => (
            <div
              onClick={() =>
                navigate(
                  `/coupon/${coupon.couponName
                    .toLowerCase()
                    .split(" ")
                    .join("")}`,
                  {
                    state: {
                      coupon: coupon,
                    },
                  }
                )
              }
              key={coupon._id}
              className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3 mx-auto"
            >
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-lg">{coupon.couponName}</p>
                <p className="text-xs">{coupon.description}</p>
                <p className="text-sm">
                  Discount:{" "}
                  <span className="text-primeColor font-semibold">
                    {coupon.discount}%
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CouponSearch;
