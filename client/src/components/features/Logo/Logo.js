import React, { Component } from 'react';
import logo from '../../../logo.png';
import './Logo.css';
import { Link } from 'react-router-dom'

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      </div>
    );
  }
}

export default Logo;
