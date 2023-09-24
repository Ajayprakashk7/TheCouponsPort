import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] py-6 md:py-10">
        <p className="text-titleFont font-normal text-center text-lightText duration-200 text-sm md:text-base">
          <span className="text-md md:mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2023 | TheCouponsPort | All Rights Reserved |
          <a href="https://ajayprakash.live" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by Ajayprakash
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
