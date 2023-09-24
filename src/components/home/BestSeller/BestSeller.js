import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  BestSellerOne,
  BestSellerTwo,
  BestSellerThree,
  BestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  const BestSellerData = [
    {
      id: "1011",
      img: BestSellerOne,
      productName: "Get 50% Off on Fashion",
      code: "FASHION50",
      store: "FashionStore",
      validUntil: "Expires on: September 30, 2023",
      des: "Save big on the latest fashion trends. Apply code FASHION50 at checkout.",
    },
    {
      id: "1012",
      img: BestSellerTwo,
      productName: "Electronics Sale: Extra 10% Off",
      code: "ELECTRO10",
      store: "ElectroShop",
      validUntil: "Expires on: October 15, 2023",
      des: "Shop for electronics and get an extra 10% discount. Use code ELECTRO10.",
    },
    {
      id: "1013",
      img: BestSellerThree,
      productName: "Flat 20% Cashback on Groceries",
      code: "No Code Needed",
      store: "GroceryMart",
      validUntil: "Limited Time Offer",
      des: "Purchase groceries and get flat 20% cashback. No BestSeller code required.",
    },
    {
      id: "1014",
      img: BestSellerFour,
      productName: "Travel Discounts: Up to 30% Off",
      code: "No Code Needed",
      store: "TravelWorld",
      validUntil: "Expires on: October 10, 2023",
      des: "Book your travel and get up to 30% off. Limited time offer.",
    },
    // Add more coupon and deal products for Indian e-commerce companies
  ];

  return (
    <div className="w-full pb-4 md:pb-20"> {/* Adjust the padding for different screen sizes */}
      <Heading heading="Best Sellers" />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10"> {/* Adjust the number of columns and gap for different screen sizes */}
        {BestSellerData.map((BestSeller) => (
          <Product
            key={BestSeller.id}
            img={BestSeller.img}
            productName={BestSeller.productName}
            price={`Use Code: ${BestSeller.code}`}
            color="Varies"
            badge={true}
            des={BestSeller.des}
            store={BestSeller.store}
            validUntil={BestSeller.validUntil}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
