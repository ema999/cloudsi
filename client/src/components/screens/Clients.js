import React, { Component } from 'react';
import SidebarMenu from './../features/SidebarMenu/SidebarMenu';
import MainContent from './../features/MainContent/MainContent';
import ClientsContent from './../features/ClientsContent/ClientsContent';

class Clients extends Component {
  render() {
    return (
      <div className="Clients">
        <SidebarMenu />
        <MainContent>
          <ClientsContent />
        </MainContent>
      </div>
    );
  }
}

export default Clients
