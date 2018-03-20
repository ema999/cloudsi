import React, { Component } from 'react';
import SidebarMenu from './../features/SidebarMenu/SidebarMenu';
import ClientsContent from './../features/ClientsContent/ClientsContent';

class Clients extends Component {
  render() {
    return (
      <div className="Clients">
        <SidebarMenu />
        <ClientsContent />
      </div>
    );
  }
}

export default Clients
