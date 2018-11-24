import React, { Component } from 'react';

import Table from './components/table/table';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table palette={['#fff', '#000', '#1a74ba', '#b4d455', 'red']} />
      </div>
    );
  }
}

export default App;
