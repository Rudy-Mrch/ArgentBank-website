import React from 'react';
import './FeatureItem.css'
const FeatureItem = ({ iconSrc, title, description, Alt }) => {
  return (
    <div className="feature-item">
      <img src={iconSrc} alt={Alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;

