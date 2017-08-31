import React, { Component } from 'react';
import './MainContent.css';
import logo from '../../../logo.png';

class MainContent extends Component {
  render() {
    return (
      <div className="MainContent">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default MainContent;
