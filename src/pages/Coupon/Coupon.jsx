import React, { useState } from 'react';
import CouponCard from './CouponCard';
import { amazonCoupons } from './amazon';
import { flipkartCoupons } from './flipkart';
import { myntraCoupons } from './myntra';
import { snapdealCoupons } from './snapdeal';
import { jabongCoupons } from './jabong';
import { shopcluesCoupons } from './shopclues';
import { paytmCoupons } from './paytm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Banner from "../../components/Banner/Banner";
import { Link } from 'react-router-dom'; // Import Link for store routing

const useStyles = makeStyles((theme) => ({
  storeContainer: {
    margin: theme.spacing(1),
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  storeImage: {
    maxWidth: '100%',
    height: 'auto',
    border: 'none',
    borderRadius: '0',
    flex: '1',
  },
  storeText: {
    marginTop: theme.spacing(1),
  },
  carouselContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4), // Add gap on the left side
    paddingRight: theme.spacing(1), // Add gap on the right side
    maxWidth: 'calc(100% - 40px)', // Adjust the maximum width as needed
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const Coupon = () => {
  // State to hold sorted coupons
  const [sortedCoupons, setSortedCoupons] = useState([]);

  const couponCardContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const classes = useStyles();

  const handleStoreChange = (storeName) => {
    // Sort coupons by store ID
    let sortedCoupons = [];

    switch (storeName) {
      case 'amazon':
        sortedCoupons = amazonCoupons;
        break;
      case 'flipkart':
        sortedCoupons = flipkartCoupons;
        break;
      case 'myntra':
        sortedCoupons = myntraCoupons;
        break;
      case 'snapdeal':
        sortedCoupons = snapdealCoupons;
        break;
      case 'jabong':
        sortedCoupons = jabongCoupons;
        break;
      case 'shopclues':
        sortedCoupons = shopcluesCoupons;
        break;
      case 'paytm':
        sortedCoupons = paytmCoupons;
        break;
      default:
        break;
    }

    // Update the sorted coupons
    setSortedCoupons(sortedCoupons);
  };

  const allCoupons = [
    ...amazonCoupons,
    ...flipkartCoupons,
    ...myntraCoupons,
    ...snapdealCoupons,
    ...jabongCoupons,
    ...shopcluesCoupons,
    ...paytmCoupons,
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const stores = [
    { id: 1, name: 'Flipkart', imageUrl: require('../Coupon/stores/2.jpg') },
    { id: 2, name: 'Amazon', imageUrl: require('../Coupon/stores/1.jpg') },
    { id: 3, name: 'Jabong', imageUrl: require('../Coupon/stores/4.jpg') },
    { id: 4, name: 'Myntra', imageUrl: require('../Coupon/stores/3.jpg') },
    { id: 5, name: 'Paytm', imageUrl: require('../Coupon/stores/5.jpg') },
    { id: 6, name: 'Snapdeal', imageUrl: require('../Coupon/stores/6.jpg') },
  ];

  return (
    <div className={classes.centerContent}>
      <Banner />
      <StoreCarousel handleStoreChange={handleStoreChange} />
      <div style={couponCardContainerStyles}>
        {sortedCoupons.map((coupon, index) => (
          <CouponCard
            key={index}
            logoSrc={coupon.logoSrc}
            title={coupon.title}
            code={coupon.code}
            validTill={coupon.validTill}
            cardColor={coupon.cardColor}
          />
        ))}
      </div>
    </div>
  );
};

const StoreCarousel = ({ handleStoreChange }) => {
  const classes = useStyles();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1080 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1080, min: 500 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 3,
    },
  };

  const stores = [
    { id: 1, name: 'Flipkart', imageUrl: require('../Coupon/stores/2.jpg') },
    { id: 2, name: 'Amazon', imageUrl: require('../Coupon/stores/1.jpg') },
    { id: 3, name: 'Jabong', imageUrl: require('../Coupon/stores/4.jpg') },
    { id: 4, name: 'Myntra', imageUrl: require('../Coupon/stores/3.jpg') },
    { id: 5, name: 'Paytm', imageUrl: require('../Coupon/stores/5.jpg') },
    { id: 6, name: 'Snapdeal', imageUrl: require('../Coupon/stores/6.jpg') },
  ];

  return (
    <div className={classes.carouselContainer}>
      <Typography variant="h6">Featured Stores</Typography>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        partialVisible={true}
      >
        {stores.map((store) => (
          <Link to={`/Coupon/${store.name.toLowerCase()}`} key={store.id}>
            <div
              className={classes.storeContainer}
              onClick={() => handleStoreChange(store.name.toLowerCase())}
            >
              <Paper>
                <img className={classes.storeImage} src={store.imageUrl} alt={store.name} />
              </Paper>
              <Typography variant="body2" className={classes.storeText}>
                {store.name}
              </Typography>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Coupon;
