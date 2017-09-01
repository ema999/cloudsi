import React, { Component } from 'react';
import SidebarMenu from './../features/SidebarMenu/SidebarMenu.js';
import MainContent from './../features/MainContent/MainContent.js';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <SidebarMenu />
        <MainContent />
        asdas
      </div>
    );
  }
}

export default Dashboard;
