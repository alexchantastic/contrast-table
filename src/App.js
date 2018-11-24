import React, { Component } from 'react';
import color from 'rgb';
import isNamedCssColor from 'is-named-css-color';

import Table from './components/Table/Table';

import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.palette = ['#zzz', 'thisisnotavalidcolorvalue', 'rgb(255, 255, 255)', '#fff', '#000', '#1a74ba', '#b4d455', 'red', 'cornflowerblue', 'lightgoldenrodyellow', 'rgba(43, 23, 55, 0.5)', '#aaa', '#bbb', '#ccc', '#ddd', '#eee'];

    this.palette = this.palette.filter((swatch) => {
      return color(swatch) || isNamedCssColor(swatch);
    });
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
