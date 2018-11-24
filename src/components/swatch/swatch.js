import React, { Component } from 'react';
import contrast from 'get-contrast';

import './Swatch.scss';

const Swatch = ({ color }) => (
  <div className="swatch" style={{background: color, color: contrast.isAccessible('#000', color) ? '#000' : '#fff'}}>
    {color}
  </div>
);

export default Swatch;
