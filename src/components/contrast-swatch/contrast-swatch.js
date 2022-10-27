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
          <Emoji character="🔡" label="Small text" className="contrast-swatch__grade-label" />
          {bodyTextPass ?
            <Emoji character="✅" label="Pass" /> :
            <Emoji character="❌" label="Fail" />
          }
        </div>

        <div className="contrast-swatch__grade" title={`Large-scale text ${largeTextPass ? 'pass' : 'fail'}`}>
          <Emoji character="🔠" label="Large text" className="contrast-swatch__grade-label" />
          {largeTextPass ?
            <Emoji character="✅" label="Pass" /> :
            <Emoji character="❌" label="Fail" />
          }
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

const Emoji = ({character, label, ...rest}) => (
  <span role="img" aria-label={label} {...rest}>{character}</span>
)

export default ContrastSwatch;
