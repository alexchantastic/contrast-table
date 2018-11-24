import React, { Component } from 'react';
import contrast from 'get-contrast';

import './ContrastSwatch.scss';

const ContrastSwatch = ({ foregroundColor, backgroundColor }) => (
  <div className="contrast-swatch">
    {contrast.isAccessible(foregroundColor, backgroundColor) ? '✅' : '❌'}

    <div className="contrast-swatch__ratio">
      {contrast.ratio(foregroundColor, backgroundColor).toFixed(2)}
    </div>
  </div>
);

export default ContrastSwatch;
