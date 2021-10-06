import React from 'react';
import contrast from 'get-contrast';

import './contrast-swatch.scss';

const minBodyTextRatio = 4.5;
const minLargeTextRatio = 3;

const ContrastSwatch = ({ foregroundColor, backgroundColor }) => {
  const ratio = contrast.ratio(foregroundColor, backgroundColor).toFixed(2);
  const score = contrast.score(foregroundColor, backgroundColor);

  const bodyTextPass = ratio >= minBodyTextRatio;
  const largeTextPass = ratio >= minLargeTextRatio;

  return (
    <div className="contrast-swatch">
      <div className="contrast-swatch__grades">
        <div className="contrast-swatch__grade" title={`Body text ${bodyTextPass ? 'pass' : 'fail'}`}>
          <span className="contrast-swatch__grade-label">🔡</span>
          {bodyTextPass ? '✅' : '❌'}
        </div>

        <div className="contrast-swatch__grade" title={`Large-scale text ${largeTextPass ? 'pass' : 'fail'}`}>
          <span className="contrast-swatch__grade-label">🔠</span>
          {largeTextPass ? '✅' : '❌'}
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
