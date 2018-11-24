import React, { Component } from 'react';

import Table from './components/Table/Table';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table palette={['#fff', '#000', '#1a74ba', '#b4d455', 'red', 'cornflowerblue', 'lightgoldenrodyellow', 'rgba(43, 23, 55, 0.5)']} />
      </div>
    );
  }
}

export default App;
