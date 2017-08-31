import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

// Icons
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import ContentLink from 'material-ui/svg-icons/content/link';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Drawer containerStyle={{padding:'0px'}} open={true}>
            <img src={logo} className="App-logo" alt="logo" />
            <Menu style={{maxWidth:'256px', textAlign: 'left'}}>
              <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
              <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
              <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
              <MenuItem primaryText="Download" leftIcon={<Download />} />
              <MenuItem primaryText="Remove" leftIcon={<Delete />} />
            </Menu>
          </Drawer>
          <div className="MainContent">
            <RaisedButton label="Hola" />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
