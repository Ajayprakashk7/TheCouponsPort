// CouponCarousel.js

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 'calc(100% - 40px)',
  },
}));

const CouponCarousel = () => {
  const classes = useStyles();

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
            <div className={classes.storeContainer}>
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

export default CouponCarousel;
