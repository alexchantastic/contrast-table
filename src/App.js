import React, { Component } from 'react';
import color from 'rgb';
import isCSSColorName from 'is-css-color-name';

import Table from './components/Table/Table';

import './App.scss';

class App extends Component {
  cleanPalette = (palette) => {
    return palette.filter((swatch) => {
      return swatch.match(/^#|^rgb/) ? color(swatch) : isCSSColorName(swatch);
    });
  }

  componentWillMount() {
    let urlPalette = window.location.href
      .replace(window.location.origin + '/?', '') // Trim URL
      .replace(/\s/g, '') // Trim whitespace
      .replace(/%20/g, '') // Trim escaped whitespace
      .replace(/(,)(\d)/g, '|$2') // Use '|' as a placeholder for ',' in rgb and rgba definitions
      .split(','); // Create array of values

    // Replace placeholder '|' with ','
    urlPalette.forEach((swatch, index) => {
      urlPalette[index] = swatch.replace(/\|/g, ',');
    });

    urlPalette = this.cleanPalette(urlPalette);

    if (urlPalette.length) {
      this.palette = urlPalette
    } else {
      this.palette = [
        'white',
        'black',
        'rgb(100,100,100)',
        'rgba(200,200,200,0.5)',
        '#ef5350',
        '#ec407a',
        '#ab47bc',
        '#7e57c2',
        '#5c6bc0',
        '#42a5f5',
        '#29b6f6',
        '#26c6da',
        '#26a69a',
        '#66bb6a',
        '#9ccc65',
        '#d4e157',
        '#ffee58',
        '#ffca28',
        '#ffa726',
        '#ff7043',
        '#8d6e63',
        '#bdbdbd',
        '#78909c',
      ];
    }

    window.history.pushState(null, null, window.location.origin + '/?' + this.palette.join(','));
  }

  render() {
    return (
      <div className="App">
        <Table palette={this.palette} />
      </div>
    );
  }
}

export default App;
