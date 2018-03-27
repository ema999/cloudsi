import React, { Component } from 'react';
import './UserAvatarDropDown.css';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Redirect } from 'react-router-dom'

const style = {margin: 5};

class UserAvatarDropDown extends Component {
  render() {
    if (!this.props.user) return (<Redirect to="/" push />);
    return (
      <div className="UserAvatarDropDown">
        <IconMenu
        iconButtonElement={
          <MenuItem>
            <Avatar
              color="#ffff"
              backgroundColor="#5FD5FF"
              size={30}
              style={style}
            >
            {this.props.user.first_name[0].toUpperCase()}
            </Avatar>
            <span className="noselect">{this.props.user.first_name.charAt(0).toUpperCase() + this.props.user.first_name.slice(1)}</span>
          </MenuItem>
        }
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        menuStyle={{minWidth: '100px',textAlign:'center'}}
        >
        <MenuItem primaryText="Salir" onClick={this.props.onClickLogOut}/>
        </IconMenu>
      </div>

    );
  }
}

export default UserAvatarDropDown;
