import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import Banner from "../../components/Banner/Banner";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const navigate = useNavigate(); // Initialize useNavigate to enable programmatic navigation

  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  // Function to navigate to the Shop page
  const goToShop = () => {
    navigate("/shop");
  };

  // Function to navigate to the Products page within the Shop section
  const goToProducts = () => {
    navigate("/shop/products");
  };

  return (
    <div className="w-full mx-auto">
      <Banner onClick={goToShop} />
      <div className="max-w-container mx-auto px-4">
        {/* Updated Breadcrumbs for the Products page */}
        <Breadcrumbs title="Products" />
        {/* ================= Products Start here =================== */}
        <div className="w-full h-full flex pb-20 gap-10">
          <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
            <ShopSideNav />
          </div>
          <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
            <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
            <Pagination itemsPerPage={itemsPerPage} />
          </div>
        </div>
        {/* ================= Products End here ===================== */}
      </div>
    </div>
  );
};

export default Shop;
