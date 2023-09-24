import React, { useState } from 'react';

// Define a common style object for reusable styles
const commonStyle = {
  border: '1px solid #fff',
  padding: '10px 20px',
};

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
    minWidth: '250px', // Minimum width to maintain responsiveness
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
    justifyContent: 'space-between', // Center the content and create space between them
    margin: '15px 0', // Adjusted margin for better spacing
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

export default CouponCard;
