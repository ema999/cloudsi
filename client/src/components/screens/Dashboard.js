import React, { Component } from 'react';
import SidebarMenu from './../features/SidebarMenu/SidebarMenu';
import DashboardContent from './../features/DashboardContent/DashboardContent';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <SidebarMenu />
        <DashboardContent />
      </div>
    );
  }
}

export default Dashboard;
