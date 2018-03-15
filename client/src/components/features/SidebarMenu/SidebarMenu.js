import React, { Component } from 'react';
import logo from '../../../logo.png';
import './SidebarMenu.css';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

// Icons
import Person from 'material-ui/svg-icons/social/person';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import ContentLink from 'material-ui/svg-icons/content/link';

class SidebarMenu extends Component {
  render() {
    return (
      <div className="SidebarMenu">
        <Drawer containerStyle={{padding:'0px'}} open={true}>
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <Menu style={{maxWidth:'256px', textAlign: 'left'}}>
            <Link to="/clients">
              <MenuItem primaryText="Clientes" leftIcon={<Person />} />
            </Link>
            <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
            <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
            <MenuItem primaryText="Download" leftIcon={<Download />} />
            <MenuItem primaryText="Remove" leftIcon={<Delete />} />
          </Menu>
        </Drawer>
      </div>
    );
  }
}

export default SidebarMenu;
