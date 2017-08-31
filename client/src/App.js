import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './components/screens/Dashboard.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Dashboard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
