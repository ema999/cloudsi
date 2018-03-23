import React, { Component } from 'react';
import SidebarMenu from './../features/SidebarMenu/SidebarMenu';
import MainContent from './../features/MainContent/MainContent';
import DashboardContent from './../features/DashboardContent/DashboardContent';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <SidebarMenu />
        <MainContent>
          <DashboardContent />
        </MainContent>
      </div>
    );
  }
}

export default Dashboard;
