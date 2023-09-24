import React, { useState } from 'react';
import Coupon from './Coupon';
import CouponCarousel from './CouponCarousel';

const ParentComponent = () => {
  const [selectedStore, setSelectedStore] = useState('all'); // Initialize with 'all'

  const handleStoreChange = (store) => {
    setSelectedStore(store);
  };

  return (
    <div>
      <CouponCarousel onStoreClick={handleStoreChange} />
      <Coupon selectedStore={selectedStore} />
    </div>
  );
};

export default ParentComponent;
