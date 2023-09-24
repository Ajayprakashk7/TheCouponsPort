import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";

const HeaderBottom = () => {
  const products = useSelector((state) => state.TheCouponsportReducer.products);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearchResultsOpen, setSearchResultsOpen] = useState(false);

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSearchResultsOpen(true);
  };

  const handleProductSelect = (item) => {
    navigate(`/product/${item.productName.toLowerCase().split(" ").join("")}`, {
      state: {
        item: item,
      },
    });
    setSearchResultsOpen(false);
  };

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <div className="w-full px-4 pb-4">
          <div className="text-center relative">
            <div className="relative inline-block w-full md:max-w-[600px] mt-4">
              <input
                className="w-full h-[50px] px-6 text-base text-primeColor bg-white outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px] rounded-xl"
                type="text"
                onChange={handleSearch}
                value={searchQuery}
                placeholder="Search your products here"
              />
              <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-4 w-5 h-5 text-primeColor" />
              {isSearchResultsOpen && searchQuery && (
                <div className="w-full h-auto mt-[55px] bg-white shadow-2xl overflow-y-scroll scrollbar-hide absolute top-0 left-0 right-0 z-50"> {/* Position the search results below the search input and above all other content */}
                  {filteredProducts.map((item) => (
                    <div
                      onClick={() => handleProductSelect(item)}
                      key={item._id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3 mx-auto"
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.productName}
                        </p>
                        <p className="text-xs">{item.des}</p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            ${item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
