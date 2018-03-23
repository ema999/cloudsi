import React, { Component } from 'react';
import './MainMenu.css';
import UserAvatarDropDown from '../UserAvatarDropDown/UserAvatarDropDown';
import UserAvatarDropDownContainer from '../../containers/UserAvatarDropDownContainer';

class MainMenu extends Component {
  render() {
    return (
      <div className="MainMenu">

        <div className="right">

          <UserAvatarDropDownContainer>
            <UserAvatarDropDown />
          </UserAvatarDropDownContainer>

        </div>

      </div>
    );
  }
}

export default MainMenu;
