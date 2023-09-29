import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import { logo, logoLight } from "../../../assets/images";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isCaretDownOpen, setCaretDownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth > 668);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-16 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div className="flex-shrink-0">
              <Image
                className="max-w-[200px] w-full h-auto"
                imgSrc={logo}
                alt="Logo"
              />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                {navBarList.map(({ _id, title, link }) => (
                  <NavLink
                    key={_id}
                    className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                    to={link}
                    state={{ data: location.pathname.split("/")[1] }}
                  >
                    <li>{title}</li>
                  </NavLink>
                ))}
                <div
                  onClick={() => setCaretDownOpen(!isCaretDownOpen)}
                  className="relative cursor-pointer"
                >
                  <FaCaretDown
                    className={`text-base ${
                      isCaretDownOpen ? "text-[#262626]" : "text-[#767676]"
                    } hover:text-[#262626]`}
                  />
                  {isCaretDownOpen && (
                    <motion.ul
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-12 right-0 z-50 bg-white w-44 text-[#767676] h-auto p-4 pb-6 border-[1px] border-[#E4E4E7] rounded-md shadow-lg"
                    >
                      <Link to="/signin">
                        <li className="text-gray-400 px-4 py-1 hover:text-[#262626] hover:bg-[#F5F5F7] duration-300 cursor-pointer">
                          Login
                        </li>
                      </Link>
                      <Link onClick={() => setCaretDownOpen(false)} to="/signup">
                        <li className="text-gray-400 px-4 py-1 hover:text-[#262626] hover:bg-[#F5F5F7] duration-300 cursor-pointer">
                          Sign Up
                        </li>
                      </Link>
                      <Link to="/signin">
                        <li className="text-gray-400 px-4 py-1 hover:text-[#262626] hover:bg-[#F5F5F7] duration-300 cursor-pointer">
                          Profile
                        </li>
                      </Link>
                      <li className="text-gray-400 px-4 py-1 hover:text-[#262626] hover:bg-[#F5F5F7] duration-300 cursor-pointer">
                        Rewards
                      </li>
                    </motion.ul>
                  )}
                </div>
                <Link to="/signin">
                  <FaUser className="text-[#767676] text-base cursor-pointer hover:text-[#262626]" />
                </Link>
                {/* Remove the Link to /cart */}
              </motion.ul>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
