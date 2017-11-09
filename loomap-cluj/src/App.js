import React, { Component } from 'react';
import data from './cluj.json';
import Nav from './Nav';
import LooList from './LooList';
import LooMap from './LooMap';
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LooMap loos={data.features} />
      </div>
    );
  }
}

export default App;
