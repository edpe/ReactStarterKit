import React, { Component } from 'react';
import data from './cluj.json';
import Nav from './Nav';
import LooList from './LooList';
import LooMap from './LooMap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: 'map'
    };
  }

  showMap = () => {
    this.setState({show: 'map'});
  }

  showList = () => {
    this.setState({show: 'list'});
  }

  render() {
    return (
      <div>
        <Nav showMap={this.showMap} showList={this.showList}/>
        {this.state.show === 'list' ?
          <LooList loos={data.features} />
          :
          <LooMap loos={data.features} />
        }
      </div>
    );
  }
}

export default App;
