import React, { Component } from 'react';

import './swatch.scss';

const Swatch = ({ foregroundColor, backgroundColor }) => (
  <div className="swatch" style={{background: backgroundColor}}>
    {foregroundColor}
  </div>
);

export default Swatch;
