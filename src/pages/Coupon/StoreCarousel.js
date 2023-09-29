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
    paddingLeft: '0', // Remove left padding
    paddingRight: '0', // Remove right padding
    maxWidth: '100%', // Adjust the maximum width to 100%
  },
  featuredStores: {
    marginLeft: theme.spacing(2), // Add margin to move text to the right
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

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
    { id: 3, name: 'Zomato', imageUrl: require('../Coupon/stores/4.jpg') },
    { id: 4, name: 'Myntra', imageUrl: require('../Coupon/stores/3.jpg') },
    { id: 5, name: 'Paytm', imageUrl: require('../Coupon/stores/5.jpg') },
    { id: 6, name: 'Snapdeal', imageUrl: require('../Coupon/stores/6.jpg') },
  ];

  return (
    <div className={classes.carouselContainer}>
      <Typography variant="h6" className={classes.featuredStores}>Coupon Stores</Typography>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        ssr={true}
        arrows={false}
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

export default StoreCarousel;
