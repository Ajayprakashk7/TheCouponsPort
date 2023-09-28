import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import RedeemIcon from "@mui/icons-material/Redeem";
import { BottomNavBarList } from "../../constants/index";

const CustomBottomNavigation = () => {
  const products = useSelector((state) => state.TheCouponsportReducer.products);
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Define a function to check if the screen width is less than a certain threshold
    const isSmallScreen = () => window.innerWidth <= 767; // Adjust the threshold as needed

    const handleResize = () => {
      if (isSmallScreen()) {
        setIsVisible(true); // Show the navigation on small screens
      } else {
        setIsVisible(false); // Hide the navigation on larger screens
      }
    };

    // Initial check on component mount
    handleResize();

    // Add a window resize listener to toggle navigation visibility
    window.addEventListener("resize", handleResize);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isVisible ? (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-topShadow z-10 pb-1.5">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {BottomNavBarList.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.title}
            icon={
              index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <RedeemIcon />
              ) : index === 2 ? (
                <ShoppingCartIcon />
              ) : (
                <PersonIcon />
              )
            }
            component={Link}
            to={item.link}
          />
        ))}
      </BottomNavigation>
    </div>
  ) : null;
};

export default CustomBottomNavigation;
