import React from 'react';
import contrast from 'get-contrast';

import './ContrastSwatch.scss';

const ContrastSwatch = ({ foregroundColor, backgroundColor }) => (
  <div className="contrast-swatch">
    <div className="contrast-swatch__grade">
      {contrast.isAccessible(foregroundColor, backgroundColor) ? '✅' : '❌'}
    </div>

    <div className="contrast-swatch__sample" style={{color: foregroundColor, background: backgroundColor}}>
      abc
    </div>

    <div className="contrast-swatch__ratio">
      {contrast.ratio(foregroundColor, backgroundColor).toFixed(2)} ({contrast.score(foregroundColor, backgroundColor)})
    </div>
  </div>
);

export default ContrastSwatch;
