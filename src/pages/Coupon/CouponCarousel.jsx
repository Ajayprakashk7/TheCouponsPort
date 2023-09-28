import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const useStyles = makeStyles((theme) => ({
  storeContainer: {
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: theme.spacing(2), 
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

const Coupon = () => {
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
    { id: 1, name: 'Flipkart', imageUrl: require('../Coupon/stores/2.jpg'), url: 'https://www.flipkart.com' },
    { id: 2, name: 'Amazon', imageUrl: require('../Coupon/stores/1.jpg'), url: 'https://www.amazon.in' },
    { id: 3, name: 'Zomato', imageUrl: require('../Coupon/stores/4.jpg'), url: 'https://www.zomato.com' },
    { id: 4, name: 'Myntra', imageUrl: require('../Coupon/stores/3.jpg'), url: 'https://www.myntra.com' },
    { id: 5, name: 'Paytm', imageUrl: require('../Coupon/stores/5.jpg'), url: 'https://www.paytm.com' },
    { id: 6, name: 'Snapdeal', imageUrl: require('../Coupon/stores/6.jpg'), url: 'https://www.snapdeal.com' },
  ];

  const handleStoreClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={classes.carouselContainer}>
      <Typography variant="h6">Featured Stores</Typography>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        ssr={true}
        autoPlay={true}
        arrows={false}
        autoPlaySpeed={2000}
        infinite={true}
        partialVisible={true}
      >
        {stores.map((store) => (
          <div className={classes.storeContainer} key={store.id} onClick={() => handleStoreClick(store.url)}>
            <Paper>
              <img className={classes.storeImage} src={store.imageUrl} alt={store.name} />
            </Paper>
            <Typography variant="body2" className={classes.storeText}>
              {store.name}
            </Typography>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Coupon;
