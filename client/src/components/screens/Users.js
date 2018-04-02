import React, { Component } from 'react';
import SidebarMenu from './../features/SidebarMenu/SidebarMenu';
import MainContent from './../features/MainContent/MainContent';
import UsersContent from './../features/UsersContent/UsersContent';
import MainMenu from './../features/MainMenu/MainMenu';

class Users extends Component {
  render() {
    return (
      <div className="Users">
        <SidebarMenu />
        <MainMenu />
        <MainContent>
          <UsersContent />
        </MainContent>
      </div>
    );
  }
}

export default Users
