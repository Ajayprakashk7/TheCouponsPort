import React, { useState } from 'react';
import { amazonCoupons } from './amazon';
import { flipkartCoupons } from './flipkart';
import { myntraCoupons } from './myntra';
import { snapdealCoupons } from './snapdeal';
import { zomatoCoupons } from './zomato';
import { paytmCoupons } from './paytm';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Banner from "../../components/Banner/Banner";
import { Link } from 'react-router-dom';
import StoreCarousel from './StoreCarousel';

// Define a common style object for reusable styles
const commonStyle = {
  border: '1px solid #fff',
  padding: '10px 20px',
};

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
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(1),
    maxWidth: 'calc(100% - 40px)',
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const CouponCard = ({ logoSrc, title, code, validTill, cardColor }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const couponCardStyles = {
    background: cardColor,
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.15)',
    position: 'relative',
    minWidth: '250px',
  };

  const couponHeaderStyles = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const logoStyles = {
    width: '80px',
    borderRadius: '8px',
  };

  const couponRowStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '15px 0',
  };

  return (
    <div style={couponCardStyles} className="coupon-card">
      <div style={couponHeaderStyles}>
        <img src={logoSrc} style={logoStyles} alt="Store Logo" />
      </div>
      <h3>{title}</h3>
      <div style={couponRowStyles} className="coupon-row">
        <span id="cpnCode" style={{ ...commonStyle, borderRight: 0 }}>
          {code}
        </span>
        <button id="cpnBtn" style={{ ...commonStyle, background: '#fff', color: '#7158fe', cursor: 'pointer' }} onClick={handleCopyCode}>
          {copied ? 'COPIED' : 'COPY CODE'}
        </button>
      </div>
      <p>Valid Till: {validTill}</p>
    </div>
  );
};

const Coupon = () => {
  const [sortedCoupons, setSortedCoupons] = useState([]);

  const couponCardContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const classes = useStyles();

  const handleStoreChange = (storeName) => {
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
      case 'zomato':
        sortedCoupons = zomatoCoupons;
        break;
      case 'paytm':
        sortedCoupons = paytmCoupons;
        break;
      default:
        sortedCoupons = [];
    }

    setSortedCoupons(sortedCoupons);
  };

  const allCoupons = [
    ...amazonCoupons,
    ...flipkartCoupons,
    ...myntraCoupons,
    ...snapdealCoupons,
    ...zomatoCoupons,
    ...paytmCoupons,
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

export default Coupon;
