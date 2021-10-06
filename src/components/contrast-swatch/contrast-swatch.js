import React from 'react';
import contrast from 'get-contrast';

import './contrast-swatch.scss';

const minBodyTextRatio = 4.5;
const minLargeTextRatio = 3;

const ContrastSwatch = ({ foregroundColor, backgroundColor }) => {
  const ratio = contrast.ratio(foregroundColor, backgroundColor).toFixed(2);
  const score = contrast.score(foregroundColor, backgroundColor);

  return (
    <div className="contrast-swatch">
      <div className="contrast-swatch__grades">
        <div className="contrast-swatch__grade">
          <span className="contrast-swatch__grade-label">🔡</span>
          {ratio >= minBodyTextRatio ? '✅' : '❌'}
        </div>

        <div className="contrast-swatch__grade">
          <span className="contrast-swatch__grade-label">🔠</span>
          {ratio >= minLargeTextRatio ? '✅' : '❌'}
        </div>
      </div>

      <div className="contrast-swatch__sample" style={{color: foregroundColor, background: backgroundColor}}>
        abc
      </div>

      <div className="contrast-swatch__ratio">
        {ratio} ({score})
      </div>
    </div>
  );
};

export default ContrastSwatch;
