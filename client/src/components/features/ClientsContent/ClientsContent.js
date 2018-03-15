import React, { Component } from 'react';
import './ClientsContent.css';
import TodoListContainer from '../../containers/todoListContainer'

class ClientsContent extends Component {
  render() {
    return (
      <div className="ClientsContent">
        <TodoListContainer />
      </div>
    );
  }
}

export default ClientsContent;
