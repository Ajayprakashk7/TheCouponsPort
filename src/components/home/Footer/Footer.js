import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  return (
    <div className="w-full bg-[#F5F5F3] py-10 xl:py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title=" More about Couponsport" />
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-base md:w-[80%] xl:w-auto">
              Unlock Savings, Embrace Rewards: The Coupon Spot, Where Deals Come to Life!
            </p>
            <ul className="flex items-center gap-2">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com/ajayprakashk7"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/ajayprakashk7"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="Product" />
          <ul className="flex flex-col gap-2">
            <li className="text-sm md:text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Shopping
            </li>
            <li className="text-sm md:text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Droplist
            </li>
            <li className="text-sm md:text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Coupons
            </li>
            <li className="text-sm md:text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              List Your Business
            </li>
            <li className="text-sm md:text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Advertise with Us
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Your account" />
          <ul className="flex flex-col gap-2">
            <li className="text-sm md:text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Profile
            </li>
            <li className="text-sm md:text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Orders
            </li>
            <li className="text-sm md:text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Addresses
            </li>
            <li className="text-sm md:text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Account Details
            </li>
            <li className="text-sm md:text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              About Us
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="Subscribe to our newsletter." />
          <div className="w-full">
            <p className="text-sm md:text-base md:mb-4">
              Many online stores offer exclusive discounts to subscribers of their newsletters
            </p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-sm md:text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-2 md:gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-10 md:h-12 border-b border-gray-400 bg-transparent px-2 md:px-4 text-primeColor text-sm md:text-base placeholder:text-xs md:placeholder-sm outline-none"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="text-red-600 text-xs md:text-sm font-semibold font-titleFont text-center animate-bounce mt-1 md:mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-lightText w-[40%] md:w-[30%] h-10 md:h-12 hover:bg-black hover:text-white duration-300 text-sm md:text-base tracking-wide"
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
